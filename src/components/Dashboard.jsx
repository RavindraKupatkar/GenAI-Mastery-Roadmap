import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Star, Menu, X } from 'lucide-react';
import { curriculumData } from '../data/curriculum';
import DashboardView from './DashboardView';
import PhaseView from './PhaseView';
import LearningView from './LearningView';
import InterviewPrepView from './InterviewPrepView';
import PortfolioView from './PortfolioView';
import ProgressCharts from './ProgressCharts';
import Sidebar from './Sidebar';
import * as supabaseService from '../services/supabase';

const Dashboard = () => {
  // No authentication - just load demo data
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [userProgress, setUserProgress] = useState({
    xp: 1250,
    level: 2,
    streak: 5,
    completedTasks: {},
    currentPhase: 1,
    currentWeek: 1,
    totalHoursStudied: 42.5,
    startDate: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    phaseProgress: {
      1: { isUnlocked: true, completed: 12, total: 25, percentage: 48 },
      2: { isUnlocked: true, completed: 0, total: 25, percentage: 0 },
      3: { isUnlocked: false, completed: 0, total: 25, percentage: 0 },
      4: { isUnlocked: false, completed: 0, total: 25, percentage: 0 }
    },
    weekProgress: {}
  });
  const [showSidebar, setShowSidebar] = useState(true);

  // Try to load real data, but fallback to demo if it fails
  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      // Try to load from Supabase
      const [userProgressData, completedTasksData, phaseProgressData, weekProgressData] = await Promise.all([
        supabaseService.loadUserProgress(),
        supabaseService.loadCompletedTasks(),
        supabaseService.loadPhaseProgress(),
        supabaseService.loadWeekProgress()
      ]);

      if (userProgressData) {
        const progress = {
          xp: userProgressData.xp || 0,
          level: userProgressData.level || 1,
          streak: userProgressData.streak || 0,
          currentPhase: userProgressData.current_phase || 1,
          currentWeek: userProgressData.current_week || 1,
          totalHoursStudied: parseFloat(userProgressData.total_hours_studied) || 0,
          startDate: userProgressData.start_date || new Date().toISOString(),
          lastVisit: userProgressData.last_visit || new Date().toISOString(),
          completedTasks: completedTasksData || {},
          phaseProgress: phaseProgressData || {},
          weekProgress: weekProgressData || {}
        };
        setUserProgress(progress);
      }
    } catch (error) {
      console.log('Using demo data (Supabase not available)');
      // Continue with demo data already set in useState
    }
  };

  const completeTask = async (taskId, xpValue, hoursSpent) => {
    // Save completed task to Supabase
    await supabaseService.saveCompletedTask(taskId, xpValue, hoursSpent);

    const newProgress = {
      ...userProgress,
      xp: userProgress.xp + xpValue,
      totalHoursStudied: userProgress.totalHoursStudied + (hoursSpent || 0),
      completedTasks: {
        ...userProgress.completedTasks,
        [taskId]: {
          completed: true,
          timestamp: new Date().toISOString(),
          hoursSpent: hoursSpent || 0
        }
      }
    };
    
    const newLevel = Math.floor(newProgress.xp / 1000) + 1;
    if (newLevel > userProgress.level) {
      newProgress.level = newLevel;
      alert(`🎉 LEVEL UP! You're now Level ${newLevel}! Keep crushing it!`);
    }
    
    // Save to Supabase
    await supabaseService.saveUserProgress(newProgress);
    
    // Update phase and week progress
    await updateProgressTracking(newProgress);
    
    setUserProgress(newProgress);
  };

  const updateProgressTracking = async (progress) => {
    // Calculate phase progress based on completed tasks
    const phaseId = progress.currentPhase;
    const phase = curriculumData.phases.find(p => p.id === phaseId);
    
    if (phase && phase.weeks_detail) {
      // Count total tasks in phase
      let totalTasksInPhase = 0;
      let completedTasksInPhase = 0;

      phase.weeks_detail.forEach(week => {
        if (week.days) {
          week.days.forEach(day => {
            const allTasks = [
              ...(day.morning?.tasks || []),
              ...(day.night?.tasks || []),
              ...(day.allDay?.tasks || [])
            ];
            totalTasksInPhase += allTasks.length;
            completedTasksInPhase += allTasks.filter(t => progress.completedTasks[t.id]).length;
          });
        }
      });

      // Update phase progress in Supabase
      await supabaseService.updatePhaseProgress(phaseId, completedTasksInPhase, totalTasksInPhase);

      // Update week progress
      const currentWeek = phase.weeks_detail.find(w => w.weekNum === progress.currentWeek);
      if (currentWeek && currentWeek.days) {
        let totalTasksInWeek = 0;
        let completedTasksInWeek = 0;

        currentWeek.days.forEach(day => {
          const allTasks = [
            ...(day.morning?.tasks || []),
            ...(day.night?.tasks || []),
            ...(day.allDay?.tasks || [])
          ];
          totalTasksInWeek += allTasks.length;
          completedTasksInWeek += allTasks.filter(t => progress.completedTasks[t.id]).length;
        });

        await supabaseService.updateWeekProgress(phaseId, progress.currentWeek, completedTasksInWeek, totalTasksInWeek);
      }
    }
  };

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <DashboardView 
          userProgress={userProgress} 
          curriculum={curriculumData}
          setSelectedPhase={setSelectedPhase}
          setSelectedWeek={setSelectedWeek}
          setSelectedDay={setSelectedDay}
          setCurrentView={setCurrentView}
        />;
      case 'phase':
        return <PhaseView 
          selectedPhase={selectedPhase}
          curriculum={curriculumData}
          setSelectedWeek={setSelectedWeek}
          setSelectedDay={setSelectedDay}
          setCurrentView={setCurrentView}
          userProgress={userProgress}
        />;
      case 'learning':
        return <LearningView 
          selectedPhase={selectedPhase}
          selectedWeek={selectedWeek}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          curriculum={curriculumData}
          userProgress={userProgress}
          completeTask={completeTask}
        />;
      case 'interview':
        return <InterviewPrepView curriculum={curriculumData} />;
      case 'portfolio':
        return <PortfolioView curriculum={curriculumData} />;
      case 'charts':
        return <ProgressCharts 
          userProgress={userProgress}
        />;
      default:
        return <DashboardView 
          userProgress={userProgress} 
          curriculum={curriculumData}
          setSelectedPhase={setSelectedPhase}
          setSelectedWeek={setSelectedWeek}
          setSelectedDay={setSelectedDay}
          setCurrentView={setCurrentView}
        />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        userProgress={userProgress}
      />
      
      <div className={`flex-1 transition-all duration-300 ${showSidebar ? 'ml-64' : 'ml-0'}`}>
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {showSidebar ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Flame className="text-orange-500" size={20} />
                <span className="font-semibold">{userProgress.streak} day streak</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-semibold">Level {userProgress.level}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="text-blue-500" size={20} />
                <span className="font-semibold">{userProgress.xp} XP</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
