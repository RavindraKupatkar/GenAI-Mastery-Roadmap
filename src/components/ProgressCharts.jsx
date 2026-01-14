import React, { useState, useEffect } from 'react';
import { TrendingUp, BarChart3, Activity, Calendar } from 'lucide-react';

const ProgressCharts = ({ userProgress }) => {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDailyActivity();
  }, []);

  const loadDailyActivity = async () => {
    try {
      const { loadDailyActivity } = await import('../services/supabase');
      const data = await loadDailyActivity(30); // Last 30 days
      setDailyData(data || []);
    } catch (error) {
      console.error('Error loading daily activity:', error);
      // Fallback to mock data for demonstration
      setDailyData(generateMockData());
    } finally {
      setLoading(false);
    }
  };

  const generateMockData = () => {
    const data = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        tasks_completed: Math.floor(Math.random() * 10),
        xp_earned: Math.floor(Math.random() * 500),
        hours_studied: Math.floor(Math.random() * 4),
      });
    }
    return data;
  };

  const maxXP = Math.max(...dailyData.map(d => d.xp_earned || 0), 100);
  const maxHours = Math.max(...dailyData.map(d => d.hours_studied || 0), 4);
  const maxTasks = Math.max(...dailyData.map(d => d.tasks_completed || 0), 10);

  const totalTasksLast30Days = dailyData.reduce((sum, d) => sum + (d.tasks_completed || 0), 0);
  const totalXPLast30Days = dailyData.reduce((sum, d) => sum + (d.xp_earned || 0), 0);
  const totalHoursLast30Days = dailyData.reduce((sum, d) => sum + (d.hours_studied || 0), 0);
  const avgTasksPerDay = (totalTasksLast30Days / 30).toFixed(1);
  const avgHoursPerDay = (totalHoursLast30Days / 30).toFixed(1);

  const streakDays = calculateStreak();

  function calculateStreak() {
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    for (let i = dailyData.length - 1; i >= 0; i--) {
      if (dailyData[i].tasks_completed > 0) {
        streak++;
      } else if (dailyData[i].date !== today) {
        break;
      }
    }
    return streak;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl p-6 text-white">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <TrendingUp size={32} />
          Your Progress Analytics
        </h1>
        <p className="text-sm opacity-90">Last 30 days of learning activity</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-500">Total Tasks</div>
            <BarChart3 className="text-blue-500" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-800">{totalTasksLast30Days}</div>
          <div className="text-xs text-gray-500 mt-1">{avgTasksPerDay} avg/day</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-500">Total XP</div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-800">{totalXPLast30Days.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">{(totalXPLast30Days / 30).toFixed(0)} avg/day</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-500">Hours Studied</div>
            <Activity className="text-purple-500" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-800">{totalHoursLast30Days}</div>
          <div className="text-xs text-gray-500 mt-1">{avgHoursPerDay} avg/day</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-500">Current Streak</div>
            <Calendar className="text-orange-500" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-800">{streakDays}</div>
          <div className="text-xs text-gray-500 mt-1">consecutive days</div>
        </div>
      </div>

      {/* XP Earned Chart */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="text-green-500" />
          XP Earned per Day
        </h2>
        <div className="h-64 flex items-end justify-between gap-1">
          {dailyData.map((day, index) => {
            const height = (day.xp_earned / maxXP) * 100;
            const date = new Date(day.date);
            const isToday = day.date === new Date().toISOString().split('T')[0];
            return (
              <div key={index} className="flex-1 flex flex-col items-center group relative">
                <div 
                  className={`w-full rounded-t transition-all ${
                    isToday ? 'bg-gradient-to-t from-green-500 to-green-400' : 'bg-gradient-to-t from-green-600 to-green-500'
                  } hover:opacity-80 cursor-pointer`}
                  style={{ height: `${height}%`, minHeight: day.xp_earned > 0 ? '4px' : '0' }}
                  title={`${day.date}: ${day.xp_earned} XP`}
                ></div>
                {index % 5 === 0 && (
                  <div className="text-xs text-gray-400 mt-2 rotate-45 origin-left">
                    {date.getMonth() + 1}/{date.getDate()}
                  </div>
                )}
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {day.date}<br />
                  {day.xp_earned} XP<br />
                  {day.tasks_completed} tasks
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hours Studied Chart */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Activity className="text-purple-500" />
          Hours Studied per Day
        </h2>
        <div className="h-64 flex items-end justify-between gap-1">
          {dailyData.map((day, index) => {
            const height = (day.hours_studied / maxHours) * 100;
            const date = new Date(day.date);
            const isToday = day.date === new Date().toISOString().split('T')[0];
            return (
              <div key={index} className="flex-1 flex flex-col items-center group relative">
                <div 
                  className={`w-full rounded-t transition-all ${
                    isToday ? 'bg-gradient-to-t from-purple-500 to-purple-400' : 'bg-gradient-to-t from-purple-600 to-purple-500'
                  } hover:opacity-80 cursor-pointer`}
                  style={{ height: `${height}%`, minHeight: day.hours_studied > 0 ? '4px' : '0' }}
                  title={`${day.date}: ${day.hours_studied}h`}
                ></div>
                {index % 5 === 0 && (
                  <div className="text-xs text-gray-400 mt-2 rotate-45 origin-left">
                    {date.getMonth() + 1}/{date.getDate()}
                  </div>
                )}
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {day.date}<br />
                  {day.hours_studied}h studied<br />
                  {day.tasks_completed} tasks
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tasks Completed Chart */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="text-blue-500" />
          Tasks Completed per Day
        </h2>
        <div className="h-64 flex items-end justify-between gap-1">
          {dailyData.map((day, index) => {
            const height = (day.tasks_completed / maxTasks) * 100;
            const date = new Date(day.date);
            const isToday = day.date === new Date().toISOString().split('T')[0];
            return (
              <div key={index} className="flex-1 flex flex-col items-center group relative">
                <div 
                  className={`w-full rounded-t transition-all ${
                    isToday ? 'bg-gradient-to-t from-blue-500 to-blue-400' : 'bg-gradient-to-t from-blue-600 to-blue-500'
                  } hover:opacity-80 cursor-pointer`}
                  style={{ height: `${height}%`, minHeight: day.tasks_completed > 0 ? '4px' : '0' }}
                  title={`${day.date}: ${day.tasks_completed} tasks`}
                ></div>
                {index % 5 === 0 && (
                  <div className="text-xs text-gray-400 mt-2 rotate-45 origin-left">
                    {date.getMonth() + 1}/{date.getDate()}
                  </div>
                )}
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {day.date}<br />
                  {day.tasks_completed} tasks<br />
                  {day.xp_earned} XP
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="text-orange-500" />
          Activity Heatmap
        </h2>
        <div className="grid grid-cols-10 gap-2">
          {dailyData.map((day, index) => {
            const intensity = day.tasks_completed > 0 
              ? Math.min(Math.ceil((day.tasks_completed / maxTasks) * 4), 4)
              : 0;
            const colors = [
              'bg-gray-100',
              'bg-green-200',
              'bg-green-400',
              'bg-green-600',
              'bg-green-800'
            ];
            return (
              <div
                key={index}
                className={`${colors[intensity]} w-full h-10 rounded transition-all hover:scale-110 cursor-pointer`}
                title={`${day.date}: ${day.tasks_completed} tasks, ${day.xp_earned} XP`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressCharts;
