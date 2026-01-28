import React from 'react';
import { Play, Lock } from 'lucide-react';

const PhaseView = ({ selectedPhase, curriculum, setSelectedWeek, setSelectedDay, setCurrentView, userProgress }) => {
  const month = curriculum.months?.find(m => m.id === selectedPhase);
  if (!month) return null;

  const Icon = month.icon;
  const phaseProgress = userProgress?.phaseProgress?.[selectedPhase] || { percentage: 0, isUnlocked: true };

  // Collect weekend projects from all weeks
  const weekendProjects = month.weeks_detail?.map(week => {
    const sundayDay = week.days?.find(d => d.day === "Sunday");
    return sundayDay?.weekendProject ? {
      name: sundayDay.weekendProject.name,
      week: week.weekNum,
      tech: sundayDay.weekendProject.description
    } : null;
  }).filter(Boolean) || [];

  return (
    <div className="max-w-5xl mx-auto">
      <div className={`bg-gradient-to-r ${month.color} rounded-xl p-8 text-white mb-6 shadow-2xl`}>
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            {phaseProgress.isUnlocked ? (Icon && <Icon size={40} />) : <Lock size={40} />}
          </div>
          <div>
            <div className="text-sm opacity-90">Month {month.id} of 6 {!phaseProgress.isUnlocked && '(Locked)'}</div>
            <h1 className="text-4xl font-bold">{month.title}</h1>
            <div className="text-sm mt-2 opacity-90">{month.weeks} weeks • ~25 hrs/week • {month.description}</div>
          </div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold">Month Progress:</div>
            <div className="text-lg font-bold">{phaseProgress.percentage.toFixed(0)}%</div>
          </div>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div
              className="bg-white h-3 rounded-full transition-all"
              style={{ width: `${phaseProgress.percentage}%` }}
            ></div>
          </div>
          <div className="text-sm">{month.skillProgress}</div>
        </div>
      </div>

      {/* Weekend Projects */}
      {weekendProjects.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Weekend Projects You'll Build</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {weekendProjects.map((project, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg p-4">
                <div className="font-bold mb-2">{project.name}</div>
                <div className="text-sm text-gray-600 mb-2">Week {project.week}</div>
                <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">{project.tech}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weeks */}
      <div className="space-y-4">
        {(month.weeks_detail || []).map((week, idx) => (
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
            <div className="text-sm text-gray-700 mb-3">{week.hoursThisWeek} hours this week</div>
            {week.days && (
              <div className="flex flex-wrap gap-2">
                {week.days.map((day, dayIdx) => (
                  <span key={dayIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {day.day}: {day.dailyGoal}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhaseView;
