import React, { useState, useEffect } from 'react';
import { Target, Calendar, Clock, Flame, Brain, Trophy, TrendingUp, Award, Play, Lock, Download, Upload, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const motivationalQuotes = [
  { text: "Your BMW M5 Competition isn't just a car. It's proof that you conquered AI engineering.", author: "Your 20-Week Journey" },
  { text: "Every hour coding = One step closer to that M5's carbon fiber steering wheel.", author: "Math of Dreams" },
  { text: "While others scroll, you build. Your M5 awaits the engineer who earned it.", author: "Consistency" },
  { text: "That M5? It runs on pure logic. Just like the algorithms you're building.", author: "Performance" },
  { text: "From Python beginner to AI master in 20 weeks. M5 driver by year 2027.", author: "Timeline" },
  { text: "The M5's 625 HP will feel less powerful than your AI-powered career impact.", author: "Impact" },
  { text: "You're not just learning. You're engineering yourself into the driver's seat.", author: "Identity" },
  { text: "M5 owners ask 'What's your job?' You answer 'I engineer AI.' Watch their reaction.", author: "Future You" }
];

const DashboardView = ({ userProgress, curriculum, setSelectedPhase, setSelectedWeek, setSelectedDay, setCurrentView }) => {
  const [showExportImport, setShowExportImport] = useState(false);
  
  const totalWeeks = curriculum.phases.reduce((sum, p) => sum + p.weeks, 0);
  const totalHours = curriculum.phases.reduce((sum, p) => sum + (p.weeks * p.hoursPerWeek), 0);
  const completedTasksCount = Object.keys(userProgress.completedTasks).length;
  const currentLevel = userProgress.level;
  const xpProgress = (userProgress.xp % 1000) / 10;

  const handleExportProgress = async () => {
    try {
      const { exportProgress } = await import('../services/supabase');
      const data = await exportProgress();
      if (data) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `genai-progress-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        alert('✅ Progress exported successfully!');
      }
    } catch (error) {
      alert('❌ Error exporting progress');
      console.error(error);
    }
  };

  const handleImportProgress = async (event) => {
    try {
      const file = event.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          const { importProgress } = await import('../services/supabase');
          const success = await importProgress(data);
          if (success) {
            alert('✅ Progress imported successfully! Refreshing...');
            window.location.reload();
          } else {
            alert('❌ Error importing progress');
          }
        } catch (err) {
          alert('❌ Invalid progress file');
          console.error(err);
        }
      };
      reader.readAsText(file);
    } catch (error) {
      alert('❌ Error importing progress');
      console.error(error);
    }
  };

  const findCurrentTask = () => {
    const phase = curriculum.phases.find(p => p.id === userProgress.currentPhase);
    if (!phase) return null;
    
    const week = phase.weeks_detail?.find(w => w.weekNum === userProgress.currentWeek);
    if (!week || !week.days) return null;

    // Find first incomplete task
    for (const day of week.days) {
      const allTasks = [
        ...(day.morning?.tasks || []),
        ...(day.night?.tasks || []),
        ...(day.allDay?.tasks || [])
      ];
      
      for (const task of allTasks) {
        if (!userProgress.completedTasks[task.id]) {
          return { phase, week, day, task };
        }
      }
    }
    
    return null;
  };

  const getPhaseProgress = (phaseId) => {
    return userProgress.phaseProgress?.[phaseId] || { percentage: 0, isUnlocked: true };
  };

  const [dailyQuote] = useState(() => {
    const today = new Date().getDate();
    return motivationalQuotes[today % motivationalQuotes.length];
  });

  return (
    <div className="space-y-6">
      {/* Daily Motivation */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl p-6 text-white shadow-lg animate-pulse-slow">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="animate-spin-slow" size={24} />
          <span className="font-bold text-lg">Daily Motivation</span>
        </div>
        <p className="text-2xl font-bold mb-2 italic">"{dailyQuote.text}"</p>
        <p className="text-sm opacity-90">— {dailyQuote.author}</p>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back, Ravindra! 🚀</h1>
            <p className="text-xl opacity-90 mb-4">🏁 Every line of code is a mile closer to your BMW M5 Competition — Master AI, Engineer Your Dreams 🚀</p>
            <div className="flex items-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Week {userProgress.currentWeek} of {totalWeeks}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{userProgress.totalHoursStudied} / {totalHours} hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className={`${
                  userProgress.streak >= 30 ? 'text-red-300 animate-bounce' :
                  userProgress.streak >= 14 ? 'text-orange-300 animate-pulse' :
                  userProgress.streak >= 7 ? 'text-yellow-300' : 'text-gray-300'
                }`} size={18} />
                <span>
                  {userProgress.streak} day streak
                  {userProgress.streak >= 30 && ' 🔥🔥🔥'}
                  {userProgress.streak >= 14 && userProgress.streak < 30 && ' 🔥🔥'}
                  {userProgress.streak >= 7 && userProgress.streak < 14 && ' 🔥'}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{currentLevel}</div>
            <div className="text-sm opacity-90">Level</div>
            <div className="mt-2 w-32 h-2 bg-white/30 rounded-full">
              <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${xpProgress}%` }}></div>
            </div>
            <div className="text-xs mt-1">{userProgress.xp} / {currentLevel * 1000} XP</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-3">
            <Target className="text-blue-500" size={32} />
            <span className="text-3xl font-bold text-gray-800">{Math.round((completedTasksCount / 500) * 100)}%</span>
          </div>
          <div className="text-sm text-gray-600">Overall Progress</div>
          <div className="text-xs text-gray-500 mt-1">{completedTasksCount} tasks done</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-3">
            <Brain className="text-purple-500" size={32} />
            <span className="text-3xl font-bold text-gray-800">{curriculum.portfolioProjects.length}</span>
          </div>
          <div className="text-sm text-gray-600">Portfolio Projects</div>
          <div className="text-xs text-gray-500 mt-1">Diverse tech stacks</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="text-green-500" size={32} />
            <span className="text-3xl font-bold text-gray-800">{userProgress.totalHoursStudied}h</span>
          </div>
          <div className="text-sm text-gray-600">Time Invested</div>
          <div className="text-xs text-gray-500 mt-1">Path to mastery</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-3">
            <Flame className="text-orange-500" size={32} />
            <span className="text-3xl font-bold text-gray-800">{userProgress.streak}</span>
          </div>
          <div className="text-sm text-gray-600">Day Streak</div>
          <div className="text-xs text-gray-500 mt-1">Don't break it!</div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={24} />
          Achievement Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`text-center p-4 rounded-lg border-2 ${
            userProgress.streak >= 7 ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-4xl mb-2">{userProgress.streak >= 7 ? '🔥' : '🔒'}</div>
            <div className="font-bold text-sm">Week Warrior</div>
            <div className="text-xs text-gray-600">7-day streak</div>
          </div>
          <div className={`text-center p-4 rounded-lg border-2 ${
            completedTasksCount >= 50 ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-400' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-4xl mb-2">{completedTasksCount >= 50 ? '💪' : '🔒'}</div>
            <div className="font-bold text-sm">Task Master</div>
            <div className="text-xs text-gray-600">50 tasks done</div>
          </div>
          <div className={`text-center p-4 rounded-lg border-2 ${
            userProgress.xp >= 5000 ? 'bg-gradient-to-br from-green-50 to-teal-50 border-green-400' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-4xl mb-2">{userProgress.xp >= 5000 ? '⚡' : '🔒'}</div>
            <div className="font-bold text-sm">XP Legend</div>
            <div className="text-xs text-gray-600">5000 XP earned</div>
          </div>
          <div className={`text-center p-4 rounded-lg border-2 ${
            userProgress.currentWeek >= 10 ? 'bg-gradient-to-br from-pink-50 to-red-50 border-pink-400' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-4xl mb-2">{userProgress.currentWeek >= 10 ? '🚀' : '🔒'}</div>
            <div className="font-bold text-sm">Halfway Hero</div>
            <div className="text-xs text-gray-600">Week 10 reached</div>
          </div>
        </div>
      </div>

      {/* Continue Where You Left Off */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <ArrowRight className="animate-pulse" />
              Continue Where You Left Off
            </h2>
            <p className="text-sm opacity-90">
              Phase {userProgress.currentPhase} • Week {userProgress.currentWeek} • {getPhaseProgress(userProgress.currentPhase).percentage.toFixed(0)}% Complete
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExportProgress}
              className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
            >
              <Download size={16} />
              Export
            </button>
            <label className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 cursor-pointer">
              <Upload size={16} />
              Import
              <input type="file" accept=".json" onChange={handleImportProgress} className="hidden" />
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            const current = findCurrentTask();
            if (current) {
              setSelectedPhase(userProgress.currentPhase);
              setSelectedWeek(userProgress.currentWeek);
              setSelectedDay(current.week.days.indexOf(current.day));
              setCurrentView('learning');
            } else {
              setSelectedPhase(userProgress.currentPhase);
              setSelectedWeek(userProgress.currentWeek);
              setSelectedDay(0);
              setCurrentView('learning');
            }
          }}
          className="w-full bg-white text-blue-600 px-6 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3"
        >
          <Play size={24} />
          Resume Learning
        </button>
      </div>

      {/* Today's Mission */}
      <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-blue-500">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="text-blue-500" />
            Today's Mission
          </h2>
          <button 
            onClick={() => {
              setSelectedPhase(1);
              setSelectedWeek(1);
              setSelectedDay(0);
              setCurrentView('learning');
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Play size={20} />
            Start Learning Now
          </button>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Current Phase</div>
              <div className="font-bold text-lg">Phase {userProgress.currentPhase}: Python for AI/ML</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">This Week</div>
              <div className="font-bold text-lg">Week 1: Python Essentials</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Goal</div>
              <div className="font-bold text-lg text-green-600">Python 2/10 → 5/10</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <div className="font-semibold mb-2">Monday's Schedule:</div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-600">Morning (8:30-11:00)</div>
                <div>Setup → Data Types → NumPy Arrays → Build Script</div>
              </div>
              <div>
                <div className="text-gray-600">Night (10:30-11:30)</div>
                <div>Watch Python tutorials → Daily reflection</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Milestone Message */}
      {userProgress.currentWeek >= 5 && userProgress.currentWeek < 20 && (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="animate-bounce" size={32} />
            <div>
              <div className="text-2xl font-bold">
                {userProgress.currentWeek >= 15 ? "You're in the final stretch! 🏁" :
                 userProgress.currentWeek >= 10 ? "Halfway there! Keep crushing it! 💪" :
                 "You're building momentum! 🚀"}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {20 - userProgress.currentWeek} weeks until you're a Senior Gen AI Engineer earning 12-15k QAR
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Milestone Message */}
      {userProgress.currentWeek >= 5 && userProgress.currentWeek < 20 && (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="animate-bounce" size={32} />
            <div>
              <div className="text-2xl font-bold">
                {userProgress.currentWeek >= 15 ? "You're in the final stretch! 🏁" :
                 userProgress.currentWeek >= 10 ? "Halfway there! Keep crushing it! 💪" :
                 "You're building momentum! 🚀"}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {20 - userProgress.currentWeek} weeks until you're a Senior Gen AI Engineer earning 12-15k QAR
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-bold mb-4">20-Week Mastery Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {curriculum.phases.map((phase) => {
            const Icon = phase.icon;
            const phaseProgress = getPhaseProgress(phase.id);
            const isUnlocked = phaseProgress.isUnlocked;
            const isCompleted = phaseProgress.isCompleted;
            const percentage = phaseProgress.percentage || 0;
            
            return (
              <div 
                key={phase.id}
                onClick={() => (setSelectedPhase(phase.id), setCurrentView('phase'))}
                className={`rounded-xl shadow-lg p-6 transition-all relative hover-scale bg-white cursor-pointer hover:shadow-2xl border-2 border-transparent hover:border-blue-500 ${
                  percentage === 100 ? ' glow-green' : percentage > 0 ? ' glow' : ''
                }`}
              >
                {false && (
                  <div className="absolute top-4 right-4">
                    <Lock className="text-gray-400" size={24} />
                  </div>
                )}
                {isCompleted && (
                  <div className="absolute top-4 right-4">
                    <Trophy className="text-yellow-500" size={24} />
                  </div>
                )}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center mb-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="font-bold text-sm text-gray-500 mb-1">
                  Phase {phase.id} {!isUnlocked && '(Locked)'} {isCompleted && '(Complete)'}
                </div>
                <div className="font-bold text-lg mb-2">{phase.title}</div>
                <div className="text-xs text-gray-600 mb-3">{phase.weeks} weeks • {phase.hoursPerWeek} hrs/week</div>
                <div className="text-xs text-gray-500 mb-3">{phase.description}</div>
                <div className="bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`bg-gradient-to-r ${phase.color} rounded-full h-2 transition-all`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs font-semibold mb-1">{percentage.toFixed(0)}% Complete</div>
                <div className="text-xs text-gray-500">{phase.skillProgress}</div>
                {false && percentage === 0 && (
                  <div className="mt-3 text-xs text-orange-600 font-semibold">
                    Complete Phase {phase.id - 1} to 80% to unlock
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="text-yellow-500" />
          Your Future Portfolio (12 Projects)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {curriculum.portfolioProjects.slice(0, 6).map(project => (
            <div key={project.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition">
              <div className="font-bold mb-2">{project.title}</div>
              <div className="text-xs text-gray-600 mb-2">{project.tech}</div>
              <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">{project.value}</div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setCurrentView('portfolio')}
          className="mt-4 text-blue-600 font-semibold hover:underline"
        >
          View All 12 Projects →
        </button>
      </div>

      {/* Motivation */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">💪 Remember Your Goal</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-semibold mb-2">Where You Are:</div>
            <ul className="space-y-1">
              <li>• Python: 2/10 (not confident)</li>
              <li>• Froze in CEO interview</li>
              <li>• Qatar offer: 7k QAR (undervalued)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Where You'll Be (20 weeks):</div>
            <ul className="space-y-1">
              <li>• Python: 8/10 (production-ready)</li>
              <li>• Answer ANY Gen AI question confidently</li>
              <li>• Multiple offers: 12-15k QAR+</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
