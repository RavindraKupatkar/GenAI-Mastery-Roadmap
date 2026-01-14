import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ExternalLink, Lightbulb, Target, Clock, Award, Sparkles } from 'lucide-react';
import Confetti from './Confetti';

const LearningView = ({ selectedPhase, selectedWeek, selectedDay, setSelectedDay, curriculum, userProgress, completeTask }) => {
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  
  if (selectedPhase === null || selectedWeek === null || selectedDay === null) {
    return <div className="text-center py-12 text-gray-500">Select a phase, week, and day to start learning</div>;
  }

  const phase = curriculum.phases.find(p => p.id === selectedPhase);
  const week = phase?.weeks_detail[selectedWeek - 1];
  const day = week?.days?.[selectedDay];

  if (!day) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">🚀</div>
        <div className="text-2xl font-bold mb-4">Content Coming as You Progress!</div>
        <div className="text-gray-600 mb-6">
          Focus on mastering Week 1 first. Detailed content for subsequent weeks will be available as you advance.
        </div>
        <button 
          onClick={() => {
            setSelectedDay(0);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Go to Week 1, Day 1
        </button>
      </div>
    );
  }

  const isTaskCompleted = (taskId) => {
    return userProgress.completedTasks[taskId]?.completed || false;
  };

  const handleTaskToggle = (task) => {
    if (!isTaskCompleted(task.id)) {
      completeTask(task.id, task.xp || 10, task.estimatedHours || 0);
      setConfettiTrigger(prev => prev + 1); // Trigger confetti celebration!
    }
  };

  const renderTask = (task) => {
    const completed = isTaskCompleted(task.id);
    
    return (
      <div 
        key={task.id}
        className={`border-2 rounded-lg p-4 transition-all ${
          completed ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-blue-400'
        }`}
      >
        <div className="flex items-start gap-3">
          <button 
            onClick={() => handleTaskToggle(task)}
            className="mt-1 flex-shrink-0"
          >
            {completed ? (
              <CheckCircle className="text-green-600" size={24} />
            ) : (
              <Circle className="text-gray-400 hover:text-blue-500" size={24} />
            )}
          </button>
          
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="font-bold text-lg">{task.title}</div>
                {task.time && <div className="text-sm text-gray-600">{task.time}</div>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {task.xp && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-semibold">
                    +{task.xp} XP
                  </span>
                )}
                {task.estimatedHours && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {task.estimatedHours}h
                  </span>
                )}
              </div>
            </div>

            {task.description && (
              <p className="text-gray-700 mb-3">{task.description}</p>
            )}

            {task.resources && task.resources.length > 0 && (
              <div className="mb-3">
                <div className="text-sm font-semibold text-gray-700 mb-1">Resources:</div>
                <div className="space-y-1">
                  {task.resources.map((resource, idx) => (
                    <a 
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <ExternalLink size={14} />
                      <span>{resource.name}</span>
                      <span className="text-xs text-gray-500">({resource.type})</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {task.action && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-3">
                <div className="text-sm font-semibold text-blue-900 mb-1">Action:</div>
                <div className="text-sm text-blue-800">{task.action}</div>
              </div>
            )}

            {task.output && (
              <div className="bg-purple-50 border-l-4 border-purple-500 p-3 mb-3">
                <div className="text-sm font-semibold text-purple-900 mb-1">Expected Output:</div>
                <div className="text-sm text-purple-800">{task.output}</div>
              </div>
            )}

            {task.aiRelevance && (
              <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-3">
                <div className="text-sm font-semibold text-green-900 mb-1 flex items-center gap-1">
                  <Lightbulb size={14} />
                  Why This Matters for AI:
                </div>
                <div className="text-sm text-green-800">{task.aiRelevance}</div>
              </div>
            )}

            {task.tcsBridge && (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-3 mb-3">
                <div className="text-sm font-semibold text-orange-900 mb-1">TCS Project Connection:</div>
                <div className="text-sm text-orange-800">{task.tcsBridge}</div>
              </div>
            )}

            {task.stuck && (
              <div className="bg-gray-50 border-l-4 border-gray-400 p-3">
                <div className="text-sm font-semibold text-gray-900 mb-1">If You're Stuck:</div>
                <div className="text-sm text-gray-700">{task.stuck}</div>
              </div>
            )}

            {task.portfolioNote && (
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mt-3">
                <div className="text-sm font-semibold text-yellow-900 mb-1">Portfolio Note:</div>
                <div className="text-sm text-yellow-800">{task.portfolioNote}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderTaskSection = (section, sectionName) => {
    if (!section || !section.tasks) return null;

    return (
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-2xl font-bold">{sectionName}</div>
              <div className="text-sm opacity-90">{section.timeSlot}</div>
            </div>
            <div className="text-sm bg-white/20 px-3 py-1 rounded backdrop-blur">
              {section.focus}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {section.tasks.map(task => renderTask(task))}
        </div>
      </div>
    );
  };

  const allTasks = [
    ...(day.morning?.tasks || []),
    ...(day.night?.tasks || []),
    ...(day.allDay?.tasks || [])
  ];
  
  const completedCount = allTasks.filter(t => isTaskCompleted(t.id)).length;
  const progressPercent = allTasks.length > 0 ? (completedCount / allTasks.length) * 100 : 0;

  return (
    <div className="max-w-6xl mx-auto">
      <Confetti trigger={confettiTrigger} />
      
      {/* Day Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-6 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="text-sm opacity-90">Phase {selectedPhase} • Week {selectedWeek}</div>
            <h1 className="text-4xl font-bold">{day.day}</h1>
            <div className="text-lg mt-2 opacity-90">{day.dailyGoal}</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-1">{day.totalXP}</div>
            <div className="text-sm opacity-90">Total XP Available</div>
            <div className="text-sm mt-1">{day.totalHours} hours</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/20 rounded-full h-3 mb-2">
          <div 
            className="bg-white h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="text-sm text-center">
          {completedCount} / {allTasks.length} tasks completed ({Math.round(progressPercent)}%)
        </div>
      </div>

      {/* Day Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6 flex items-center justify-between">
        <button
          onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
          disabled={selectedDay === 0}
          className="px-4 py-2 bg-gray-200 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
        >
          ← Previous Day
        </button>
        <div className="text-center">
          <div className="font-bold">Day {selectedDay + 1} of {week.days?.length || 0}</div>
          <div className="text-sm text-gray-600">{week.title}</div>
        </div>
        <button
          onClick={() => setSelectedDay(Math.min((week.days?.length || 1) - 1, selectedDay + 1))}
          disabled={selectedDay >= (week.days?.length || 1) - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
        >
          Next Day →
        </button>
      </div>

      {/* Task Sections */}
      {day.morning && renderTaskSection(day.morning, "Morning Session")}
      {day.night && renderTaskSection(day.night, "Night Session")}
      {day.allDay && renderTaskSection(day.allDay, "All Day Focus")}

      {/* Checkpoint */}
      {day.checkpoint && (
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Target size={32} />
            <h3 className="text-2xl font-bold">Today's Checkpoint</h3>
          </div>
          <p className="text-lg">{day.checkpoint}</p>
        </div>
      )}
    </div>
  );
};

export default LearningView;
