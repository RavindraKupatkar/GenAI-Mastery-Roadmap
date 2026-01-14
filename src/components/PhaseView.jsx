import React from 'react';
import { Play, Lock } from 'lucide-react';

const PhaseView = ({ selectedPhase, curriculum, setSelectedWeek, setSelectedDay, setCurrentView, userProgress }) => {
  const phase = curriculum.phases.find(p => p.id === selectedPhase);
  if (!phase) return null;

  const Icon = phase.icon;
  const phaseProgress = userProgress?.phaseProgress?.[selectedPhase] || { percentage: 0, isUnlocked: true };

  return (
    <div className="max-w-5xl mx-auto">
      <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-8 text-white mb-6 shadow-2xl`}>
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            {phaseProgress.isUnlocked ? <Icon size={40} /> : <Lock size={40} />}
          </div>
          <div>
            <div className="text-sm opacity-90">Phase {phase.id} of 4 {!phaseProgress.isUnlocked && '(Locked)'}</div>
            <h1 className="text-4xl font-bold">{phase.title}</h1>
            <div className="text-sm mt-2 opacity-90">{phase.weeks} weeks • {phase.hoursPerWeek} hrs/week • {phase.description}</div>
          </div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold">Phase Progress:</div>
            <div className="text-lg font-bold">{phaseProgress.percentage.toFixed(0)}%</div>
          </div>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div 
              className="bg-white h-3 rounded-full transition-all"
              style={{ width: `${phaseProgress.percentage}%` }}
            ></div>
          </div>
          <div className="text-sm">{phase.skillProgress}</div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Projects You'll Build</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {phase.projects.map((project, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-4">
              <div className="font-bold mb-2">{project.name}</div>
              <div className="text-sm text-gray-600 mb-2">Week {project.week}</div>
              <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">{project.tech}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-4">
        {phase.weeks_detail.map((week, idx) => (
            <div 
            key={week.weekNum}
            onClick={() => {
              setSelectedWeek(week.weekNum);
              setSelectedDay(0);
              setCurrentView('learning');
            }}
            className={`bg-white rounded-xl shadow-lg p-6 transition-all cursor-pointer hover:shadow-xl border-2 border-transparent hover:border-blue-500`}
          >
            <div className="flex items-center justify-between mb-3 flex-wrap gap-4">
              <div>
                <div className="text-2xl font-bold">Week {week.weekNum}: {week.title}</div>
                <div className="text-sm text-gray-600 mt-1">Goal: {week.goal}</div>
              </div>
              {(
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
                  <Play size={18} />
                  Start Week
                </button>
              )}
            </div>
            <div className="text-sm text-gray-700 mb-3">{week.summary}</div>
            {week.weekendProject && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="font-semibold text-purple-900 mb-1">Weekend Project:</div>
                <div className="text-sm text-purple-800">{week.weekendProject.name} ({week.weekendProject.duration})</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhaseView;
