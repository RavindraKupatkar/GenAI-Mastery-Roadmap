import React from 'react';
import { Home, BookOpen, Code, Brain, Trophy, Target, X, TrendingUp } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, showSidebar, setShowSidebar, userProgress }) => {
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'learning', label: 'Learning Path', icon: BookOpen },
    { id: 'interview', label: 'Interview Prep', icon: Brain },
    { id: 'portfolio', label: 'Portfolio', icon: Trophy },
    { id: 'charts', label: 'Progress Charts', icon: TrendingUp },
  ];

  if (!showSidebar) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-900 to-purple-900 text-white shadow-2xl z-20">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-2xl font-bold">Gen AI</div>
            <div className="text-sm opacity-75">Mastery Hub</div>
          </div>
          <button 
            onClick={() => setShowSidebar(false)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-8">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-xs opacity-75 mb-1">Your Progress</div>
            <div className="text-2xl font-bold">{userProgress.level}</div>
            <div className="text-xs opacity-75">Level</div>
            <div className="mt-2 bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all"
                style={{ width: `${(userProgress.xp % 1000) / 10}%` }}
              ></div>
            </div>
            <div className="text-xs mt-1 opacity-75">{userProgress.xp} XP</div>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-white text-blue-900 font-semibold shadow-lg' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8 bg-white/10 rounded-lg p-4 backdrop-blur">
          <div className="text-sm font-semibold mb-2">🎯 Your Goal</div>
          <div className="text-xs opacity-90">
            Transform to Senior Gen AI Engineer earning 12-15k QAR in 20 weeks
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
