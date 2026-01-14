import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your .env.local file.');
  console.error('VITE_SUPABASE_URL:', supabaseUrl);
  console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey);
}

// Create Supabase client
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Get authenticated user ID or fallback to anonymous
export const getUserId = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) {
      return user.id;
    }
  } catch (error) {
    console.log('No authenticated user found');
  }
  
  // Fallback to localStorage for anonymous users
  let userId = localStorage.getItem('genai-user-id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('genai-user-id', userId);
  }
  return userId;
};

// ============================================
// USER PROGRESS OPERATIONS
// ============================================

export const loadUserProgress = async () => {
  const userId = getUserId();
  
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No data found - initialize new user
        return await initializeUserProgress();
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error loading user progress:', error);
    // Fallback to localStorage
    const saved = localStorage.getItem('genai-progress-v2');
    return saved ? JSON.parse(saved) : null;
  }
};

export const initializeUserProgress = async () => {
  const userId = getUserId();
  
  const initialProgress = {
    user_id: userId,
    xp: 0,
    level: 1,
    streak: 0,
    current_phase: 1,
    current_week: 1,
    total_hours_studied: 0,
    start_date: new Date().toISOString(),
    last_visit: new Date().toISOString()
  };

  try {
    const { data, error } = await supabase
      .from('user_progress')
      .insert([initialProgress])
      .select()
      .single();

    if (error) throw error;

    // Initialize Phase 1 as unlocked
    await initializePhaseProgress(userId, 1);

    return data;
  } catch (error) {
    console.error('Error initializing user progress:', error);
    return initialProgress;
  }
};

export const saveUserProgress = async (progress) => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        xp: progress.xp,
        level: progress.level,
        streak: progress.streak,
        current_phase: progress.currentPhase,
        current_week: progress.currentWeek,
        total_hours_studied: progress.totalHoursStudied,
        last_visit: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;

    // Also save to localStorage as backup
    localStorage.setItem('genai-progress-v2', JSON.stringify(progress));

    return data;
  } catch (error) {
    console.error('Error saving user progress:', error);
    // Fallback to localStorage only
    localStorage.setItem('genai-progress-v2', JSON.stringify(progress));
    return progress;
  }
};

// ============================================
// TASK OPERATIONS
// ============================================

export const loadCompletedTasks = async () => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('completed_tasks')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    // Convert to object format { taskId: { completed: true, ... } }
    const tasksObj = {};
    data.forEach(task => {
      tasksObj[task.task_id] = {
        completed: task.completed,
        timestamp: task.completed_at,
        hoursSpent: parseFloat(task.hours_spent)
      };
    });

    return tasksObj;
  } catch (error) {
    console.error('Error loading completed tasks:', error);
    return {};
  }
};

export const saveCompletedTask = async (taskId, xpEarned, hoursSpent) => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('completed_tasks')
      .upsert({
        user_id: userId,
        task_id: taskId,
        completed: true,
        completed_at: new Date().toISOString(),
        xp_earned: xpEarned,
        hours_spent: hoursSpent
      })
      .select()
      .single();

    if (error) throw error;

    // Update daily activity
    await updateDailyActivity(xpEarned, hoursSpent);

    return data;
  } catch (error) {
    console.error('Error saving completed task:', error);
    return null;
  }
};

// ============================================
// PHASE PROGRESS OPERATIONS
// ============================================

export const initializePhaseProgress = async (userId, phaseId) => {
  try {
    const { data, error } = await supabase
      .from('phase_progress')
      .upsert({
        user_id: userId,
        phase_id: phaseId,
        is_unlocked: true,
        started_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error initializing phase progress:', error);
    return null;
  }
};

export const loadPhaseProgress = async () => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('phase_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    // Convert to object format { phaseId: { ... } }
    const phaseObj = {};
    data.forEach(phase => {
      phaseObj[phase.phase_id] = {
        completed: phase.completed_tasks,
        total: phase.total_tasks,
        percentage: parseFloat(phase.percentage),
        isUnlocked: phase.is_unlocked,
        isCompleted: phase.is_completed
      };
    });

    return phaseObj;
  } catch (error) {
    console.error('Error loading phase progress:', error);
    return {};
  }
};

export const updatePhaseProgress = async (phaseId, completedTasks, totalTasks) => {
  const userId = getUserId();
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const isCompleted = percentage === 100;

  try {
    const { data, error } = await supabase
      .from('phase_progress')
      .upsert({
        user_id: userId,
        phase_id: phaseId,
        completed_tasks: completedTasks,
        total_tasks: totalTasks,
        percentage: percentage,
        is_completed: isCompleted,
        completed_at: isCompleted ? new Date().toISOString() : null
      })
      .select()
      .single();

    if (error) throw error;

    // If phase is 80% complete, unlock next phase
    if (percentage >= 80 && phaseId < 4) {
      await unlockPhase(phaseId + 1);
    }

    return data;
  } catch (error) {
    console.error('Error updating phase progress:', error);
    return null;
  }
};

export const unlockPhase = async (phaseId) => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('phase_progress')
      .upsert({
        user_id: userId,
        phase_id: phaseId,
        is_unlocked: true,
        started_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error unlocking phase:', error);
    return null;
  }
};

// ============================================
// WEEK PROGRESS OPERATIONS
// ============================================

export const loadWeekProgress = async () => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('week_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    // Convert to nested object { phaseId: { weekNum: { ... } } }
    const weekObj = {};
    data.forEach(week => {
      const phaseId = parseInt(week.phase_id, 10);
      const weekNum = parseInt(week.week_num, 10);
      
      if (!weekObj[phaseId]) {
        weekObj[phaseId] = {};
      }
      weekObj[phaseId][weekNum] = {
        completed: week.completed_tasks,
        total: week.total_tasks,
        percentage: parseFloat(week.percentage),
        isCompleted: week.is_completed
      };
    });

    return weekObj;
  } catch (error) {
    console.error('Error loading week progress:', error);
    return {};
  }
};

export const updateWeekProgress = async (phaseId, weekNum, completedTasks, totalTasks) => {
  const userId = getUserId();
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const isCompleted = percentage === 100;

  try {
    const { data, error } = await supabase
      .from('week_progress')
      .upsert({
        user_id: userId,
        phase_id: phaseId,
        week_num: weekNum,
        completed_tasks: completedTasks,
        total_tasks: totalTasks,
        percentage: percentage,
        is_completed: isCompleted,
        completed_at: isCompleted ? new Date().toISOString() : null
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating week progress:', error);
    return null;
  }
};

// ============================================
// DAILY ACTIVITY OPERATIONS
// ============================================

export const updateDailyActivity = async (xpEarned, hoursSpent) => {
  const userId = getUserId();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  try {
    // Get existing activity for today
    const { data: existing, error: fetchError } = await supabase
      .from('daily_activity')
      .select('*')
      .eq('user_id', userId)
      .eq('activity_date', today)
      .single();

    const tasksCompleted = (existing?.tasks_completed || 0) + 1;
    const totalXp = (existing?.xp_earned || 0) + xpEarned;
    const totalHours = (parseFloat(existing?.hours_studied) || 0) + hoursSpent;

    const { data, error } = await supabase
      .from('daily_activity')
      .upsert({
        user_id: userId,
        activity_date: today,
        tasks_completed: tasksCompleted,
        xp_earned: totalXp,
        hours_studied: totalHours
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating daily activity:', error);
    return null;
  }
};

export const loadDailyActivity = async (days = 30) => {
  const userId = getUserId();

  try {
    const { data, error } = await supabase
      .from('daily_activity')
      .select('*')
      .eq('user_id', userId)
      .order('activity_date', { ascending: false })
      .limit(days);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error loading daily activity:', error);
    return [];
  }
};

// ============================================
// EXPORT / IMPORT OPERATIONS
// ============================================

export const exportProgress = async () => {
  const userId = getUserId();

  try {
    const [userProgress, completedTasks, phaseProgress, weekProgress, dailyActivity] = await Promise.all([
      supabase.from('user_progress').select('*').eq('user_id', userId).single(),
      supabase.from('completed_tasks').select('*').eq('user_id', userId),
      supabase.from('phase_progress').select('*').eq('user_id', userId),
      supabase.from('week_progress').select('*').eq('user_id', userId),
      supabase.from('daily_activity').select('*').eq('user_id', userId)
    ]);

    return {
      exportDate: new Date().toISOString(),
      userId: userId,
      userProgress: userProgress.data,
      completedTasks: completedTasks.data,
      phaseProgress: phaseProgress.data,
      weekProgress: weekProgress.data,
      dailyActivity: dailyActivity.data
    };
  } catch (error) {
    console.error('Error exporting progress:', error);
    return null;
  }
};

export const importProgress = async (progressData) => {
  const userId = getUserId();

  try {
    // Import each table
    await Promise.all([
      supabase.from('user_progress').upsert({ ...progressData.userProgress, user_id: userId }),
      supabase.from('completed_tasks').delete().eq('user_id', userId).then(() =>
        supabase.from('completed_tasks').insert(
          progressData.completedTasks.map(task => ({ ...task, user_id: userId }))
        )
      ),
      supabase.from('phase_progress').delete().eq('user_id', userId).then(() =>
        supabase.from('phase_progress').insert(
          progressData.phaseProgress.map(phase => ({ ...phase, user_id: userId }))
        )
      ),
      supabase.from('week_progress').delete().eq('user_id', userId).then(() =>
        supabase.from('week_progress').insert(
          progressData.weekProgress.map(week => ({ ...week, user_id: userId }))
        )
      )
    ]);

    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
};
