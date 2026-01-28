import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronRight, ExternalLink, Lightbulb, Target, Clock, Award, Sparkles, Play, Youtube, Code } from 'lucide-react';
import Confetti from './Confetti';

const LearningView = ({ selectedPhase, selectedWeek, selectedDay, setSelectedDay, curriculum, userProgress, completeTask, user }) => {
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  // Get user's gender for filtering quotes
  const userGender = user?.user_metadata?.gender || 'male';

  // Helper function to filter day quote based on gender
  const getGenderSpecificQuote = (dayQuote) => {
    if (!dayQuote) return 'Daily Learning';

    // If the quote contains both Boys and Girls sections, extract the relevant one
    if (dayQuote.includes('Boys:') || dayQuote.includes('Girls:') || dayQuote.includes('🏎️') || dayQuote.includes('👑')) {
      // For girls, try to find a Girls-specific quote first
      if (userGender === 'female') {
        // If this is a Boys quote, return a generic daily goal instead
        if (dayQuote.includes('Boys:') || (dayQuote.includes('🏎️') && !dayQuote.includes('👑'))) {
          return '👑 Queen energy day! Focus on mastering today\'s concepts';
        }
        // Remove the "Girls:" prefix if present
        return dayQuote.replace('👑 Girls: ', '👑 ').replace('Girls: ', '');
      } else {
        // For boys, check if it's a Girls quote
        if (dayQuote.includes('Girls:') || (dayQuote.includes('👑') && !dayQuote.includes('🏎️'))) {
          return '🏎️ BMW day! Every concept mastered = one step closer to the M5';
        }
        // Remove the "Boys:" prefix if present  
        return dayQuote.replace('🏎️ Boys: ', '🏎️ ').replace('Boys: ', '');
      }
    }

    return dayQuote;
  };

  if (selectedPhase === null || selectedWeek === null || selectedDay === null) {
    return <div className="text-center py-12 text-gray-500">Select a month, week, and day to start learning</div>;
  }

  const month = curriculum.months?.find(m => m.id === selectedPhase);
  const week = month?.weeks_detail?.find(w => w.weekNum === selectedWeek);
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

  // Get the gender-filtered quote for display
  const displayQuote = getGenderSpecificQuote(day.day);

  const isTaskCompleted = (taskId) => {
    return userProgress.completedTasks[taskId]?.completed || false;
  };

  const handleTaskToggle = (task) => {
    if (!isTaskCompleted(task.id)) {
      completeTask(task.id, task.xp || 10, task.estimatedHours || 0.5);
      setConfettiTrigger(prev => prev + 1);
    }
  };

  // Render a concept video card
  const renderConcept = (concept) => {
    const completed = isTaskCompleted(concept.id);

    return (
      <div
        key={concept.id}
        className={`border-2 rounded-lg p-4 transition-all ${completed ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-blue-400'
          }`}
      >
        <div className="flex items-start gap-3">
          <button
            onClick={() => handleTaskToggle(concept)}
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
                <div className="font-bold text-lg flex items-center gap-2">
                  <Youtube className="text-red-500" size={18} />
                  {concept.title}
                </div>
                <div className="text-sm text-gray-600">{concept.channel} • {concept.duration}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-semibold">
                  +{concept.xp} XP
                </span>
              </div>
            </div>

            {concept.videoUrl && (
              <a
                href={concept.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline bg-blue-50 px-3 py-2 rounded-lg"
              >
                <Play size={16} />
                Watch Video
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render a hands-on task card
  const renderHandson = (task) => {
    const completed = isTaskCompleted(task.id);

    const difficultyColors = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800'
    };

    return (
      <div
        key={task.id}
        className={`border-2 rounded-lg p-4 transition-all ${completed ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-purple-400'
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
              <Circle className="text-gray-400 hover:text-purple-500" size={24} />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="font-bold text-lg flex items-center gap-2">
                  <Code className="text-purple-500" size={18} />
                  {task.title}
                </div>
                <div className="text-sm text-gray-600">{task.platform}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-xs px-2 py-1 rounded font-semibold ${difficultyColors[task.difficulty] || difficultyColors.medium}`}>
                  {task.difficulty}
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-semibold">
                  +{task.xp} XP
                </span>
              </div>
            </div>

            {task.url && task.url !== '#' && (
              <a
                href={task.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 hover:underline bg-purple-50 px-3 py-2 rounded-lg"
              >
                <Code size={16} />
                Start Challenge
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render weekend project
  const renderWeekendProject = (project) => {
    const completed = isTaskCompleted(project.id);

    return (
      <div className={`border-2 rounded-xl p-6 transition-all ${completed ? 'border-green-500 bg-green-50' : 'border-purple-300 bg-purple-50'
        }`}>
        <div className="flex items-start gap-3">
          <button
            onClick={() => handleTaskToggle(project)}
            className="mt-1 flex-shrink-0"
          >
            {completed ? (
              <CheckCircle className="text-green-600" size={28} />
            ) : (
              <Circle className="text-purple-400 hover:text-purple-600" size={28} />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <div className="font-bold text-xl flex items-center gap-2">
                  🚀 {project.name}
                </div>
                <div className="text-gray-700 mt-1">{project.description}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded font-semibold">
                  {project.estimatedHours}h
                </span>
                <span className="bg-yellow-200 text-yellow-800 text-sm px-3 py-1 rounded font-bold">
                  +{project.xp} XP
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="font-semibold text-purple-900 mb-2">Requirements:</div>
              <ul className="space-y-1">
                {project.requirements?.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-purple-500">✓</span> {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Calculate all tasks for progress
  const allTasks = [
    ...(day.concepts || []),
    ...(day.handson || []),
    ...(day.weekendProject ? [day.weekendProject] : [])
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
            <div className="text-sm opacity-90">Month {selectedPhase} • Week {selectedWeek}</div>
            <h1 className="text-4xl font-bold">{displayQuote}</h1>
            <div className="text-lg mt-2 opacity-90">{day.dailyGoal}</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-1">{day.totalXP || 0}</div>
            <div className="text-sm opacity-90">Total XP Available</div>
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

      {/* Concepts Section */}
      {day.concepts && day.concepts.length > 0 && (
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Youtube size={24} />
                  Learn Concepts
                </div>
                <div className="text-sm opacity-90">Watch these videos to understand today's topics</div>
              </div>
              <div className="text-sm bg-white/20 px-3 py-1 rounded backdrop-blur">
                {day.concepts.length} videos
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {day.concepts.map(concept => renderConcept(concept))}
          </div>
        </div>
      )}

      {/* Hands-on Section */}
      {day.handson && day.handson.length > 0 && (
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Code size={24} />
                  Hands-on Practice
                </div>
                <div className="text-sm opacity-90">Apply what you learned with these exercises</div>
              </div>
              <div className="text-sm bg-white/20 px-3 py-1 rounded backdrop-blur">
                {day.handson.length} challenges
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {day.handson.map(task => renderHandson(task))}
          </div>
        </div>
      )}

      {/* Weekend Project */}
      {day.weekendProject && (
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="text-2xl font-bold">🎯 Weekend Project</div>
                <div className="text-sm opacity-90">Build something awesome to solidify your learning!</div>
              </div>
            </div>
          </div>
          {renderWeekendProject(day.weekendProject)}
        </div>
      )}

      {/* Day Complete Message */}
      {progressPercent === 100 && (
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Award size={32} />
            <h3 className="text-2xl font-bold">🎉 Day Complete!</h3>
          </div>
          <p className="text-lg">Amazing work! You've completed all tasks for {day.day}. Keep the momentum going!</p>
        </div>
      )}
    </div>
  );
};

export default LearningView;
