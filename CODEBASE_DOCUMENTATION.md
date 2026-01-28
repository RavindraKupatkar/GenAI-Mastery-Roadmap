# GenAI Mastery Hub - Complete Codebase Documentation

> **For AI Studio Analysis**: This comprehensive documentation describes every aspect of the GenAI Mastery Hub learning platform codebase, including architecture, components, data structures, services, and implementation details.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Entry Points & Application Bootstrap](#4-entry-points--application-bootstrap)
5. [Core Components Deep Dive](#5-core-components-deep-dive)
6. [Data Layer - Curriculum Structure](#6-data-layer---curriculum-structure)
7. [Services Layer - Supabase Integration](#7-services-layer---supabase-integration)
8. [Styling & Custom Animations](#8-styling--custom-animations)
9. [State Management Patterns](#9-state-management-patterns)
10. [Feature Details](#10-feature-details)
11. [Configuration Files](#11-configuration-files)
12. [Deployment Configuration](#12-deployment-configuration)
13. [API Patterns & Data Flow](#13-api-patterns--data-flow)
14. [Code Examples & Snippets](#14-code-examples--snippets)

---

## 1. Project Overview

### Purpose
GenAI Mastery Hub is a **personalized 20-week learning platform** designed to transform professionals into Senior Gen AI Engineers. The platform tracks learning progress through a gamified system with XP, levels, streaks, and achievements.

### Target Audience
- TCS Engineers transitioning to AI/ML roles
- Professionals aiming for 12-15k QAR+ salary range
- Self-learners following a structured curriculum

### Key Value Propositions
- **Never freeze in interviews** - Master every Gen AI question
- **Transform Python skills** from 2/10 to 8/10
- **Build 12 portfolio projects** proving expertise
- **Gamified progress tracking** with XP and achievements

---

## 2. Technology Stack

### Frontend Framework
```json
{
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "vite": "5.4.21"
}
```

### Styling
```json
{
  "tailwindcss": "3.4.15",
  "postcss": "8.4.49",
  "autoprefixer": "10.4.20"
}
```

### UI Components
```json
{
  "lucide-react": "0.454.0"  // Icon library
}
```

### Backend (Optional)
```json
{
  "@supabase/supabase-js": "2.89.0"  // Database & Auth
}
```

### Routing (Installed but currently unused)
```json
{
  "react-router-dom": "7.12.0"
}
```

### Build Output
- **Bundle Size**: 532.22 kB (148.05 kB gzipped)
- **Modules**: 1621 modules transformed

---

## 3. Project Structure

```
learning-platform/
├── 📁 src/
│   ├── 📁 components/           # React UI Components
│   │   ├── Confetti.jsx         # Celebration animation (45 lines)
│   │   ├── Dashboard.jsx        # Main container & state (252 lines)
│   │   ├── DashboardView.jsx    # Home dashboard (482+ lines)
│   │   ├── InterviewPrepView.jsx# Interview Q&A (75 lines)
│   │   ├── LearningView.jsx     # Task display (269 lines)
│   │   ├── PhaseView.jsx        # Phase details (95 lines)
│   │   ├── PortfolioView.jsx    # Portfolio projects (110 lines)
│   │   ├── ProgressCharts.jsx   # Analytics charts (266 lines)
│   │   └── Sidebar.jsx          # Navigation (80 lines)
│   │
│   ├── 📁 context/              # React Context (unused)
│   │   └── AuthContext.jsx
│   │
│   ├── 📁 data/                 # Static Data
│   │   └── curriculum.js        # Full curriculum (2321 lines)
│   │
│   ├── 📁 pages/                # Page Components (unused)
│   │   └── VerificationCallbackPage.jsx
│   │
│   ├── 📁 services/             # Backend Services
│   │   └── supabase.js          # Supabase integration (501 lines)
│   │
│   ├── App.jsx                  # Root component (10 lines)
│   ├── main.jsx                 # Entry point (41 lines)
│   └── index.css                # Global styles (95 lines)
│
├── 📁 dist/                     # Production build output
├── 📁 supabase/                 # Supabase migrations
├── 📄 index.html                # HTML template
├── 📄 package.json              # Dependencies
├── 📄 vite.config.js            # Vite configuration
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 vercel.json               # Vercel deployment config
└── 📄 .env.local                # Environment variables (gitignored)
```

---

## 4. Entry Points & Application Bootstrap

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gen AI Mastery Hub - Your Journey to 12-15k QAR</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### main.jsx (Entry Point)
```jsx
import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Error Boundary for catching render errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
```

### App.jsx (Root Component)
```jsx
import Dashboard from './components/Dashboard'

function App() {
  return <Dashboard />
}

export default App
```

**Note**: The application currently does NOT use React Router. Navigation is handled through state management in the Dashboard component.

---

## 5. Core Components Deep Dive

### 5.1 Dashboard.jsx - Main Application Container

**Purpose**: Central state management and view routing

**Key State Variables**:
```javascript
const [currentView, setCurrentView] = useState('dashboard');
// Values: 'dashboard', 'phase', 'learning', 'interview', 'portfolio', 'charts'

const [selectedPhase, setSelectedPhase] = useState(1);  // Phase 1-4
const [selectedWeek, setSelectedWeek] = useState(1);    // Week 1-20
const [selectedDay, setSelectedDay] = useState(0);      // Day index 0-6

const [userProgress, setUserProgress] = useState({
  xp: 1250,
  level: 2,
  streak: 5,
  completedTasks: {},
  totalHoursStudied: 42.5,
  phaseProgress: {},
  weekProgress: {}
});

const [showSidebar, setShowSidebar] = useState(true);
```

**Demo Data** (Initial State):
- Level: 2
- XP: 1,250
- Streak: 5 days
- Hours Studied: 42.5

**Key Functions**:

```javascript
// Load user progress on mount
const loadProgress = async () => {
  const data = await supabaseService.loadUserProgress();
  if (data) setUserProgress(data);
};

// Complete a task and update progress
const completeTask = async (taskId, xpEarned, hoursSpent) => {
  await supabaseService.saveCompletedTask(taskId, xpEarned, hoursSpent);
  setUserProgress(prev => ({
    ...prev,
    xp: prev.xp + xpEarned,
    completedTasks: { ...prev.completedTasks, [taskId]: true }
  }));
};

// Render different views based on currentView state
const renderView = () => {
  switch (currentView) {
    case 'dashboard': return <DashboardView {...props} />;
    case 'phase': return <PhaseView {...props} />;
    case 'learning': return <LearningView {...props} />;
    case 'interview': return <InterviewPrepView {...props} />;
    case 'portfolio': return <PortfolioView {...props} />;
    case 'charts': return <ProgressCharts {...props} />;
    default: return <DashboardView {...props} />;
  }
};
```

**Component Layout**:
```jsx
return (
  <div className="flex h-screen bg-gray-100">
    {showSidebar && <Sidebar {...sidebarProps} />}
    <main className="flex-1 overflow-y-auto p-6">
      {renderView()}
    </main>
  </div>
);
```

---

### 5.2 Sidebar.jsx - Navigation Component

**Purpose**: Left navigation panel with user stats and menu

**Props**:
```typescript
interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  userProgress: UserProgress;
}
```

**Menu Structure**:
```javascript
const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'learning', icon: BookOpen, label: 'Learning Path' },
  { id: 'interview', icon: Brain, label: 'Interview Prep' },
  { id: 'portfolio', icon: Award, label: 'Portfolio' },
  { id: 'charts', icon: BarChart3, label: 'Progress Charts' }
];
```

**Visual Features**:
- Gradient background: `from-blue-900 to-purple-900`
- Level display with trophy icon
- XP progress bar showing progress to next level
- Goal reminder: "Target: 12-15k QAR+"

**XP Level Calculation**:
```javascript
const xpForNextLevel = userProgress.level * 500;
const xpProgress = (userProgress.xp % 500) / 500 * 100;
```

---

### 5.3 DashboardView.jsx - Main Dashboard

**Purpose**: Home view with overview, stats, achievements, and phase navigation

**Key Features**:

#### 1. Motivational Quotes System
```javascript
const motivationalQuotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Success is not final, failure is not fatal...", author: "Winston Churchill" },
  { quote: "Your BMW M5 is waiting at the finish line.", author: "Your Future Self" },
  // 8 total quotes including BMW M5 themed ones
];

// Random quote selection
const [dailyQuote] = useState(() => 
  motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
);
```

#### 2. Hero Banner Component
```jsx
<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 shadow-2xl">
  <h1 className="text-4xl font-bold">Welcome back, Future AI Engineer! 🚀</h1>
  <p className="text-xl mt-2">Your journey to 12-15k QAR continues...</p>
  <div className="mt-6 flex gap-4">
    <StatsCard icon={Flame} value={streak} label="Day Streak" />
    <StatsCard icon={Target} value={`${progress}%`} label="Overall Progress" />
    <StatsCard icon={Clock} value={`${hours}h`} label="Time Invested" />
  </div>
</div>
```

#### 3. Stats Grid
```javascript
const stats = [
  { label: 'Overall Progress', value: '15%', icon: Target, color: 'blue' },
  { label: 'Projects Built', value: '2/12', icon: Briefcase, color: 'green' },
  { label: 'Hours Invested', value: '42.5h', icon: Clock, color: 'purple' },
  { label: 'Current Streak', value: '5 days', icon: Flame, color: 'orange' }
];
```

#### 4. Achievement Badges
```javascript
const achievements = [
  { id: 'week-warrior', name: 'Week Warrior', description: 'Complete 7 days in a row', icon: Flame, unlocked: streak >= 7 },
  { id: 'task-master', name: 'Task Master', description: 'Complete 50 tasks', icon: CheckCircle, unlocked: completedTasks >= 50 },
  { id: 'xp-legend', name: 'XP Legend', description: 'Earn 5000 XP', icon: Star, unlocked: xp >= 5000 },
  { id: 'halfway-hero', name: 'Halfway Hero', description: 'Complete 50% of curriculum', icon: Trophy, unlocked: progress >= 50 }
];
```

#### 5. Continue Learning Section
```jsx
<div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
  <h3>Continue Where You Left Off</h3>
  <p>Phase {currentPhase}, Week {currentWeek}, Day {currentDay}</p>
  <button onClick={() => resumeLearning()}>
    Continue Learning →
  </button>
</div>
```

#### 6. Export/Import Progress
```javascript
const handleExport = async () => {
  const data = await exportProgress();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  // Download file
};

const handleImport = async (file) => {
  const text = await file.text();
  const data = JSON.parse(text);
  await importProgress(data);
};
```

#### 7. Phase Cards (4 Phases)
```jsx
{curriculum.phases.map(phase => (
  <div 
    key={phase.id}
    className={`bg-gradient-to-r ${phase.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all ${!isUnlocked && 'opacity-50'}`}
    onClick={() => isUnlocked && navigateToPhase(phase.id)}
  >
    <div className="flex items-center gap-3">
      {isUnlocked ? <phase.icon size={32} /> : <Lock size={32} />}
      <h3>{phase.title}</h3>
    </div>
    <p>{phase.description}</p>
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} />
    </div>
  </div>
))}
```

---

### 5.4 LearningView.jsx - Task Display & Completion

**Purpose**: Display daily tasks with completion tracking and confetti celebration

**Props**:
```typescript
interface LearningViewProps {
  selectedPhase: number;
  selectedWeek: number;
  selectedDay: number;
  curriculum: CurriculumData;
  userProgress: UserProgress;
  completeTask: (taskId: string, xp: number, hours: number) => void;
}
```

**Task Rendering Logic**:
```javascript
const getCurrentDayTasks = () => {
  const phase = curriculum.phases.find(p => p.id === selectedPhase);
  const week = phase.weeks_detail.find(w => w.weekNum === selectedWeek);
  const day = week.days[selectedDay];
  
  return {
    morningTasks: day.morning?.tasks || [],
    nightTasks: day.night?.tasks || [],
    checkpoint: day.checkpoint,
    totalXP: day.totalXP
  };
};
```

**Task Card Component**:
```jsx
const TaskCard = ({ task, isCompleted, onComplete }) => (
  <div className={`p-4 rounded-xl ${isCompleted ? 'bg-green-50 border-green-500' : 'bg-white'} border-2 shadow-lg transition-all`}>
    {/* Task Header */}
    <div className="flex justify-between items-start mb-3">
      <span className="text-sm text-gray-500">{task.time}</span>
      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-bold">
        +{task.xp} XP
      </span>
    </div>
    
    {/* Task Title */}
    <h3 className="font-bold text-lg mb-2">{task.title}</h3>
    
    {/* Task Description */}
    <p className="text-gray-600 text-sm mb-3">{task.description}</p>
    
    {/* Resources */}
    {task.resources && (
      <div className="mb-3">
        <h4 className="font-semibold text-sm">📚 Resources:</h4>
        {task.resources.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:underline text-sm block">
            {r.name}
          </a>
        ))}
      </div>
    )}
    
    {/* Action Item */}
    {task.action && (
      <div className="bg-blue-50 p-3 rounded-lg mb-3">
        <h4 className="font-semibold text-sm">🎯 Action:</h4>
        <p className="text-sm">{task.action}</p>
      </div>
    )}
    
    {/* Expected Output */}
    {task.output && (
      <div className="bg-green-50 p-3 rounded-lg mb-3">
        <h4 className="font-semibold text-sm">✅ Expected Output:</h4>
        <p className="text-sm">{task.output}</p>
      </div>
    )}
    
    {/* AI Relevance */}
    {task.aiRelevance && (
      <div className="bg-purple-50 p-3 rounded-lg mb-3">
        <h4 className="font-semibold text-sm">🤖 AI Relevance:</h4>
        <p className="text-sm">{task.aiRelevance}</p>
      </div>
    )}
    
    {/* Completion Toggle */}
    <button
      onClick={() => !isCompleted && onComplete(task.id, task.xp, task.estimatedHours)}
      className={`w-full py-3 rounded-lg font-bold ${
        isCompleted 
          ? 'bg-green-500 text-white cursor-default' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {isCompleted ? '✓ Completed' : 'Mark as Complete'}
    </button>
  </div>
);
```

**Confetti Trigger**:
```javascript
const [showConfetti, setShowConfetti] = useState(false);

const handleTaskComplete = async (taskId, xp, hours) => {
  await completeTask(taskId, xp, hours);
  setShowConfetti(true);
  setTimeout(() => setShowConfetti(false), 5000);
};

return (
  <>
    <Confetti trigger={showConfetti} />
    {/* ... task cards ... */}
  </>
);
```

---

### 5.5 PhaseView.jsx - Phase Overview

**Purpose**: Display phase details, projects, and week navigation

**Phase Data Display**:
```jsx
const PhaseView = ({ selectedPhase, curriculum, userProgress, setSelectedWeek, setCurrentView }) => {
  const phase = curriculum.phases.find(p => p.id === selectedPhase);
  const phaseProgress = userProgress?.phaseProgress?.[selectedPhase] || { percentage: 0, isUnlocked: true };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Phase Header */}
      <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-8 text-white mb-6 shadow-2xl`}>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
            {phaseProgress.isUnlocked ? <phase.icon size={40} /> : <Lock size={40} />}
          </div>
          <div>
            <div className="text-sm opacity-90">Phase {phase.id} of 4</div>
            <h1 className="text-4xl font-bold">{phase.title}</h1>
            <div className="text-sm mt-2">{phase.weeks} weeks • {phase.hoursPerWeek} hrs/week</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white/20 rounded-lg p-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Phase Progress:</span>
            <span>{phaseProgress.percentage.toFixed(0)}%</span>
          </div>
          <div className="bg-white/20 rounded-full h-3">
            <div className="bg-white h-3 rounded-full" style={{ width: `${phaseProgress.percentage}%` }} />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Projects You'll Build</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {phase.projects.map((project, idx) => (
            <div key={idx} className="border-2 rounded-lg p-4">
              <div className="font-bold mb-2">{project.name}</div>
              <div className="text-sm text-gray-600">Week {project.week}</div>
              <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Week Cards */}
      <div className="space-y-4">
        {phase.weeks_detail.map(week => (
          <div 
            key={week.weekNum}
            onClick={() => {
              setSelectedWeek(week.weekNum);
              setCurrentView('learning');
            }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-blue-500"
          >
            <h3 className="text-2xl font-bold">Week {week.weekNum}: {week.title}</h3>
            <p className="text-gray-600">{week.goal}</p>
            <p className="text-sm text-gray-500 mt-2">{week.summary}</p>
            {week.weekendProject && (
              <div className="bg-purple-50 rounded-lg p-3 mt-3">
                <span className="font-semibold">Weekend Project: </span>
                {week.weekendProject.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

### 5.6 InterviewPrepView.jsx - Interview Questions

**Purpose**: Display interview questions organized by category with expandable answers

```jsx
const InterviewPrepView = ({ curriculum }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white mb-6">
        <h1 className="text-4xl font-bold">Interview Mastery</h1>
        <p>Never freeze again - master every Gen AI question</p>
      </div>

      {/* Categories */}
      {curriculum.interviewQuestions.map((category, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
          {/* Category Header (Clickable) */}
          <button
            onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
            className="w-full p-6 text-left hover:bg-gray-50"
          >
            <h3 className="text-2xl font-bold">{category.category}</h3>
            <span>{category.questions.length} questions</span>
          </button>
          
          {/* Questions (Expandable) */}
          {expandedCategory === idx && (
            <div className="p-6 space-y-6 bg-gray-50">
              {category.questions.map((item, qIdx) => (
                <div key={qIdx} className="bg-white rounded-lg p-5 shadow">
                  <div className="font-bold text-blue-900 mb-3">Q: {item.q}</div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <div className="font-semibold text-green-900 mb-2">Your Answer:</div>
                    <div>{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Strategy Tips */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white mt-8">
        <h3 className="text-2xl font-bold mb-3">🎯 Interview Strategy</h3>
        <ul>
          <li>✓ Practice answering OUT LOUD</li>
          <li>✓ Connect every answer to YOUR TCS projects</li>
          <li>✓ Use STAR method: Situation → Task → Action → Result</li>
          <li>✓ Record yourself answering</li>
          <li>✓ Practice with AI mock interviews</li>
        </ul>
      </div>
    </div>
  );
};
```

---

### 5.7 PortfolioView.jsx - Portfolio Projects

**Purpose**: Track and display the 12 portfolio projects to be built

```jsx
const PortfolioView = ({ curriculum }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-white mb-6">
        <h1 className="text-4xl font-bold">Your Portfolio</h1>
        <p>12 projects that prove you're production-ready</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {curriculum.portfolioProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl border-2 border-transparent hover:border-blue-500 transition-all">
            <div className="flex justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600">#{project.id}</div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">{project.week}</div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="text-sm text-gray-600 mb-3">{project.tech}</div>
            
            <div className="bg-blue-50 text-blue-700 text-sm px-3 py-2 rounded-lg mb-4">
              <span className="font-semibold">Value:</span> {project.value}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg">
                <Github size={16} /> Repo
              </button>
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg">
                <ExternalLink size={16} /> Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Guidelines */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Portfolio Guidelines</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="font-semibold">Each project must have:</div>
            <ul className="text-sm">
              <li>• Clean, well-documented code</li>
              <li>• Comprehensive README</li>
              <li>• Demo video or live deployment</li>
              <li>• Screenshots of key features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

### 5.8 ProgressCharts.jsx - Analytics Dashboard

**Purpose**: Visual analytics of learning progress over 30 days

**Key Features**:
1. 30-day activity tracking
2. XP earned per day chart
3. Tasks completed chart
4. Hours studied chart
5. Streak calculation

```javascript
const ProgressCharts = ({ userProgress }) => {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDailyActivity();
  }, []);

  const loadDailyActivity = async () => {
    try {
      const { loadDailyActivity } = await import('../services/supabase');
      const data = await loadDailyActivity(30);
      setDailyData(data || []);
    } catch (error) {
      // Fallback to mock data
      setDailyData(generateMockData());
    } finally {
      setLoading(false);
    }
  };

  // Generate mock data for demo
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

  // Calculations
  const totalTasksLast30Days = dailyData.reduce((sum, d) => sum + (d.tasks_completed || 0), 0);
  const totalXPLast30Days = dailyData.reduce((sum, d) => sum + (d.xp_earned || 0), 0);
  const totalHoursLast30Days = dailyData.reduce((sum, d) => sum + (d.hours_studied || 0), 0);
  const avgTasksPerDay = (totalTasksLast30Days / 30).toFixed(1);

  // Streak calculation
  function calculateStreak() {
    let streak = 0;
    for (let i = dailyData.length - 1; i >= 0; i--) {
      if (dailyData[i].tasks_completed > 0) streak++;
      else break;
    }
    return streak;
  }

  return (
    <div className="space-y-6">
      {/* Stats Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total Tasks" value={totalTasksLast30Days} icon={BarChart3} color="blue" />
        <StatCard label="Total XP" value={totalXPLast30Days} icon={TrendingUp} color="green" />
        <StatCard label="Hours Studied" value={totalHoursLast30Days} icon={Activity} color="purple" />
        <StatCard label="Current Streak" value={calculateStreak()} icon={Calendar} color="orange" />
      </div>

      {/* XP Chart - Bar visualization */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4">XP Earned per Day</h2>
        <div className="h-64 flex items-end justify-between gap-1">
          {dailyData.map((day, index) => {
            const height = (day.xp_earned / maxXP) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center group">
                <div 
                  className="w-full bg-gradient-to-t from-green-600 to-green-500 rounded-t"
                  style={{ height: `${height}%` }}
                  title={`${day.date}: ${day.xp_earned} XP`}
                />
                {index % 5 === 0 && (
                  <div className="text-xs text-gray-400 mt-2">
                    {new Date(day.date).getMonth() + 1}/{new Date(day.date).getDate()}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
```

---

### 5.9 Confetti.jsx - Celebration Animation

**Purpose**: Display celebratory confetti particles when tasks are completed

```jsx
const Confetti = ({ trigger }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 2 + Math.random() * 3,
        size: 8 + Math.random() * 6,
        color: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][
          Math.floor(Math.random() * 6)
        ]
      }));
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 5000);
    }
  }, [trigger]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${particle.left}%`,
            top: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: '50%',
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
```

---

## 6. Data Layer - Curriculum Structure

### curriculum.js Structure Overview

**File Size**: 2,321 lines of curriculum data

**Top-Level Structure**:
```javascript
export const curriculumData = {
  metadata: {
    totalWeeks: 20,
    totalHours: 700,
    targetOutcome: "Production-ready Gen AI Engineer earning 12-15k QAR+",
    commitment: "Balanced 30-40 hrs/week for sustainable learning"
  },
  
  phases: [...],           // 4 phases of learning
  interviewQuestions: [...], // Interview Q&A by category
  portfolioProjects: [...]   // 12 portfolio projects
};
```

### Phase Structure

```javascript
{
  id: 1,
  title: "Python for AI/ML",
  weeks: 6,
  hoursPerWeek: 30,
  color: "from-blue-500 to-cyan-500",  // Tailwind gradient
  icon: Code,  // Lucide icon component
  description: "Master Python specifically for AI engineering - no fluff",
  skillProgress: "Python 2/10 → 8/10 | AI-ready Python",
  
  projects: [
    { name: "NumPy Data Processor", week: 1, tech: "Python, NumPy" },
    { name: "ML Data Pipeline", week: 3, tech: "Python, Pandas, OOP" },
    { name: "Kaggle EDA Notebook", week: 6, tech: "Pandas, Matplotlib, Seaborn" }
  ],
  
  weeks_detail: [...]  // Detailed week content
}
```

### Week Structure

```javascript
{
  weekNum: 1,
  title: "Python Essentials for AI",
  goal: "Core Python syntax + data structures for ML",
  hoursThisWeek: 30,
  summary: "Variables, data types, control flow, functions, NumPy basics...",
  
  resources: [
    { name: "Python 3.11 Download", url: "https://...", type: "primary" },
    { name: "Corey Schafer Tutorial", url: "https://...", type: "video" }
  ],
  
  logicBuilding: {
    description: "Build problem-solving skills",
    videoResources: [...],
    platforms: [...],
    topics: [...],
    dailyPractice: {...}
  },
  
  handsOn: [...],
  
  weekendProject: {
    name: "NumPy Array Processor",
    duration: "8 hours",
    techStack: "Python, NumPy, typing",
    requirements: [...],
    evaluation: "Can process 10,000 records in <1 second",
    portfolioValue: "Shows: Python basics + NumPy + performance optimization"
  },
  
  days: [...]  // 7 days of content
}
```

### Day Structure

```javascript
{
  day: "Monday",
  dailyGoal: "Setup environment + Python basics for data manipulation",
  
  morning: {
    timeSlot: "8:30-11:00 (2.5hrs)",
    focus: "Active Learning + Coding",
    tasks: [...]
  },
  
  night: {
    timeSlot: "10:30-11:30 (1hr)",
    focus: "Passive Learning",
    tasks: [...]
  },
  
  checkpoint: "Can you create lists, dicts, and calculate basic statistics?",
  totalXP: 150,
  totalHours: 3.5
}
```

### Task Structure (Most Granular Level)

```javascript
{
  id: "p1w1d1m1",  // Phase1_Week1_Day1_Morning1
  time: "8:30-9:00",
  title: "🔧 AI Engineering Environment Setup",
  description: "Install Python 3.11, VS Code with AI extensions, Git, create virtual environment",
  
  resources: [
    { 
      name: "Python 3.11 Download", 
      url: "https://www.python.org/downloads/", 
      type: "primary"  // primary, video, docs, article
    }
  ],
  
  action: "Install everything, test with: python --version, pip --version, git --version",
  output: "Screenshot of versions + venv activated",
  aiRelevance: "Every AI project needs isolated environments (venv) for dependencies",
  
  xp: 25,
  estimatedHours: 0.5
}
```

### Logic Building Problems Structure

```javascript
{
  topic: "Classes & Objects",
  patterns: ["Encapsulation", "Data hiding", "Method design"],
  problems: [
    { 
      difficulty: "easy",  // easy, medium, hard
      problem: "Create a 'BankAccount' class with deposit(), withdraw(), check_balance() methods",
      platform: "HackerRank",  // HackerRank, LeetCode, Codewars, Custom
      estimatedTime: "15 min"
    }
  ]
}
```

### Daily Practice Schedule

```javascript
{
  day: "Day 1",
  problems: [
    { 
      id: "w2d1p1", 
      problem: "BankAccount class", 
      difficulty: "easy", 
      topic: "Classes", 
      time: "15 min" 
    },
    // ... 4 more problems
  ]
}
```

### Interview Questions Structure

```javascript
{
  category: "Python Fundamentals",
  questions: [
    {
      q: "Explain the difference between lists and tuples in Python",
      answer: "Lists are mutable (can be changed), tuples are immutable. Lists use [], tuples use (). Lists have more memory overhead. In ML, we use tuples for fixed data like (x, y) coordinates or shape definitions, and lists for collections that need modification."
    }
  ]
}
```

### Portfolio Projects Structure

```javascript
{
  id: 1,
  title: "NumPy Data Processor",
  week: "Week 1",
  tech: "Python, NumPy, typing",
  value: "Shows Python fundamentals + vectorized operations + CLI design"
}
```

---

## 7. Services Layer - Supabase Integration

### supabase.js Complete API

**File Size**: 501 lines

### Client Initialization

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback for demo mode (works without Supabase)
const dummyUrl = 'https://placeholder.supabase.co';
const dummyKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Using demo mode.');
}

export const supabase = createClient(
  supabaseUrl || dummyUrl, 
  supabaseAnonKey || dummyKey
);
```

### User Identification

```javascript
export const getUserId = async () => {
  try {
    // Try to get authenticated user
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.id) return user.id;
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
```

### User Progress Operations

```javascript
// Load user progress from Supabase or localStorage
export const loadUserProgress = async () => {
  const userId = getUserId();
  
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error?.code === 'PGRST116') {
      // No data found - initialize new user
      return await initializeUserProgress();
    }
    return data;
  } catch (error) {
    // Fallback to localStorage
    const saved = localStorage.getItem('genai-progress-v2');
    return saved ? JSON.parse(saved) : null;
  }
};

// Initialize new user with default progress
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
    await supabase.from('user_progress').insert([initialProgress]);
    await initializePhaseProgress(userId, 1);  // Unlock Phase 1
    return initialProgress;
  } catch (error) {
    return initialProgress;
  }
};

// Save user progress
export const saveUserProgress = async (progress) => {
  const userId = getUserId();

  try {
    await supabase.from('user_progress').upsert({
      user_id: userId,
      xp: progress.xp,
      level: progress.level,
      streak: progress.streak,
      current_phase: progress.currentPhase,
      current_week: progress.currentWeek,
      total_hours_studied: progress.totalHoursStudied,
      last_visit: new Date().toISOString()
    });
    
    // Backup to localStorage
    localStorage.setItem('genai-progress-v2', JSON.stringify(progress));
    return progress;
  } catch (error) {
    localStorage.setItem('genai-progress-v2', JSON.stringify(progress));
    return progress;
  }
};
```

### Task Operations

```javascript
// Load completed tasks
export const loadCompletedTasks = async () => {
  const userId = getUserId();

  try {
    const { data } = await supabase
      .from('completed_tasks')
      .select('*')
      .eq('user_id', userId);

    // Convert to object format
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
    return {};
  }
};

// Save completed task
export const saveCompletedTask = async (taskId, xpEarned, hoursSpent) => {
  const userId = getUserId();

  try {
    await supabase.from('completed_tasks').upsert({
      user_id: userId,
      task_id: taskId,
      completed: true,
      completed_at: new Date().toISOString(),
      xp_earned: xpEarned,
      hours_spent: hoursSpent
    });
    
    // Update daily activity
    await updateDailyActivity(xpEarned, hoursSpent);
  } catch (error) {
    console.error('Error saving completed task:', error);
  }
};
```

### Phase Progress Operations

```javascript
// Load phase progress
export const loadPhaseProgress = async () => {
  const userId = getUserId();

  try {
    const { data } = await supabase
      .from('phase_progress')
      .select('*')
      .eq('user_id', userId);

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
    return {};
  }
};

// Update phase progress (triggers unlock logic)
export const updatePhaseProgress = async (phaseId, completedTasks, totalTasks) => {
  const userId = getUserId();
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const isCompleted = percentage === 100;

  try {
    await supabase.from('phase_progress').upsert({
      user_id: userId,
      phase_id: phaseId,
      completed_tasks: completedTasks,
      total_tasks: totalTasks,
      percentage: percentage,
      is_completed: isCompleted,
      completed_at: isCompleted ? new Date().toISOString() : null
    });

    // UNLOCK LOGIC: If phase is 80% complete, unlock next phase
    if (percentage >= 80 && phaseId < 4) {
      await unlockPhase(phaseId + 1);
    }
  } catch (error) {
    console.error('Error updating phase progress:', error);
  }
};

// Unlock a phase
export const unlockPhase = async (phaseId) => {
  const userId = getUserId();
  await supabase.from('phase_progress').upsert({
    user_id: userId,
    phase_id: phaseId,
    is_unlocked: true,
    started_at: new Date().toISOString()
  });
};
```

### Week Progress Operations

```javascript
// Load week progress (nested by phase)
export const loadWeekProgress = async () => {
  const userId = getUserId();

  try {
    const { data } = await supabase
      .from('week_progress')
      .select('*')
      .eq('user_id', userId);

    // Convert to nested object { phaseId: { weekNum: {...} } }
    const weekObj = {};
    data.forEach(week => {
      const phaseId = parseInt(week.phase_id, 10);
      const weekNum = parseInt(week.week_num, 10);
      
      if (!weekObj[phaseId]) weekObj[phaseId] = {};
      weekObj[phaseId][weekNum] = {
        completed: week.completed_tasks,
        total: week.total_tasks,
        percentage: parseFloat(week.percentage),
        isCompleted: week.is_completed
      };
    });
    return weekObj;
  } catch (error) {
    return {};
  }
};

// Update week progress
export const updateWeekProgress = async (phaseId, weekNum, completedTasks, totalTasks) => {
  const userId = getUserId();
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  await supabase.from('week_progress').upsert({
    user_id: userId,
    phase_id: phaseId,
    week_num: weekNum,
    completed_tasks: completedTasks,
    total_tasks: totalTasks,
    percentage: percentage,
    is_completed: percentage === 100
  });
};
```

### Daily Activity Tracking

```javascript
// Update daily activity (aggregated per day)
export const updateDailyActivity = async (xpEarned, hoursSpent) => {
  const userId = getUserId();
  const today = new Date().toISOString().split('T')[0];

  try {
    // Get existing activity
    const { data: existing } = await supabase
      .from('daily_activity')
      .select('*')
      .eq('user_id', userId)
      .eq('activity_date', today)
      .single();

    const tasksCompleted = (existing?.tasks_completed || 0) + 1;
    const totalXp = (existing?.xp_earned || 0) + xpEarned;
    const totalHours = (parseFloat(existing?.hours_studied) || 0) + hoursSpent;

    await supabase.from('daily_activity').upsert({
      user_id: userId,
      activity_date: today,
      tasks_completed: tasksCompleted,
      xp_earned: totalXp,
      hours_studied: totalHours
    });
  } catch (error) {
    console.error('Error updating daily activity:', error);
  }
};

// Load daily activity for charts
export const loadDailyActivity = async (days = 30) => {
  const userId = getUserId();

  try {
    const { data } = await supabase
      .from('daily_activity')
      .select('*')
      .eq('user_id', userId)
      .order('activity_date', { ascending: false })
      .limit(days);

    return data;
  } catch (error) {
    return [];
  }
};
```

### Export/Import Operations

```javascript
// Export all user data
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
    return null;
  }
};

// Import user data
export const importProgress = async (progressData) => {
  const userId = getUserId();

  try {
    await Promise.all([
      supabase.from('user_progress').upsert({ ...progressData.userProgress, user_id: userId }),
      // Delete and re-insert tasks
      supabase.from('completed_tasks').delete().eq('user_id', userId).then(() =>
        supabase.from('completed_tasks').insert(
          progressData.completedTasks.map(task => ({ ...task, user_id: userId }))
        )
      ),
      // Similar for other tables...
    ]);
    return true;
  } catch (error) {
    return false;
  }
};
```

---

## 8. Styling & Custom Animations

### index.css - Global Styles & Animations

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  /* Slow pulse animation */
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Slow spin animation */
  .animate-spin-slow {
    animation: spin 3s linear infinite;
  }
  
  /* Slow bounce */
  .animate-bounce-slow {
    animation: bounce 2s infinite;
  }
  
  /* Gradient animation */
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  
  /* Confetti fall animation */
  .animate-confetti-fall {
    animation: confetti-fall linear forwards;
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes confetti-fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
  
  /* Glass morphism effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  /* Hover scale effect */
  .hover-scale {
    transition: transform 0.2s ease;
  }
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  /* Glow effects */
  .glow {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  .glow-green {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
  }
  .glow-yellow {
    box-shadow: 0 0 20px rgba(234, 179, 8, 0.5);
  }
}

/* Global body styles */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f9fafb;
}

#root {
  min-height: 100vh;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

### Common Gradient Classes Used

```css
/* Phase colors */
.from-blue-500.to-cyan-500     /* Phase 1: Python */
.from-green-500.to-emerald-500 /* Phase 2: ML Foundations */
.from-purple-500.to-pink-500   /* Phase 3: Deep Learning */
.from-orange-500.to-red-500    /* Phase 4: Gen AI */

/* UI gradients */
.from-blue-600.via-purple-600.to-pink-600  /* Hero banner */
.from-blue-900.to-purple-900               /* Sidebar */
```

---

## 9. State Management Patterns

### Application State Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Dashboard.jsx                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              useState hooks                       │   │
│  │  - currentView                                   │   │
│  │  - selectedPhase, selectedWeek, selectedDay     │   │
│  │  - userProgress                                  │   │
│  │  - completedTasks                               │   │
│  └─────────────────────────────────────────────────┘   │
│                         │                               │
│                         ▼                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │           Props passed to child views             │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   ┌─────────┐      ┌──────────┐      ┌──────────┐
   │Sidebar  │      │ Views    │      │Supabase  │
   │         │      │(children)│      │ Service  │
   └─────────┘      └──────────┘      └──────────┘
```

### Data Flow for Task Completion

```
User clicks "Mark Complete"
         │
         ▼
LearningView.handleTaskComplete(taskId, xp, hours)
         │
         ▼
Dashboard.completeTask(taskId, xp, hours)
         │
         ├──► supabaseService.saveCompletedTask()
         │              │
         │              ▼
         │    Supabase Database (or localStorage)
         │
         └──► setUserProgress() - Update React state
                    │
                    ▼
              Re-render components with new progress
                    │
                    ▼
              setShowConfetti(true) - Trigger celebration
```

### LocalStorage Fallback Pattern

```javascript
// All Supabase operations have localStorage fallback
try {
  // Try Supabase first
  const result = await supabase.from('table').select('*');
  return result.data;
} catch (error) {
  // Fallback to localStorage
  const saved = localStorage.getItem('key');
  return saved ? JSON.parse(saved) : defaultValue;
}
```

---

## 10. Feature Details

### 10.1 Gamification System

**XP System**:
- Tasks award XP based on difficulty (10-100 XP)
- XP accumulates across all completed tasks
- Level up every 500 XP

**Level Calculation**:
```javascript
const level = Math.floor(userProgress.xp / 500) + 1;
const xpToNextLevel = 500;
const currentLevelProgress = userProgress.xp % 500;
```

**Streak System**:
- Tracks consecutive days of activity
- Reset if a day is missed
- Displayed prominently in UI

**Achievements**:
| Achievement | Requirement | Icon |
|-------------|-------------|------|
| Week Warrior | 7-day streak | Flame |
| Task Master | 50 tasks completed | CheckCircle |
| XP Legend | 5000 XP earned | Star |
| Halfway Hero | 50% progress | Trophy |

### 10.2 Phase Unlock System

**Rules**:
- Phase 1 is always unlocked
- Next phase unlocks when current phase reaches 80%
- Locked phases show lock icon and are non-clickable

```javascript
// Unlock logic in updatePhaseProgress
if (percentage >= 80 && phaseId < 4) {
  await unlockPhase(phaseId + 1);
}
```

### 10.3 Progress Tracking

**Tracked Metrics**:
- XP earned (total and per day)
- Tasks completed (with timestamps)
- Hours studied (per task, aggregated daily)
- Phase/Week completion percentages
- Daily activity for charts

### 10.4 Export/Import Feature

**Export Format** (JSON):
```json
{
  "exportDate": "2024-01-15T10:30:00.000Z",
  "userId": "user_123456789_abc123",
  "userProgress": { "xp": 1250, "level": 2, ... },
  "completedTasks": [ { "task_id": "p1w1d1m1", ... } ],
  "phaseProgress": [ { "phase_id": 1, "percentage": 45, ... } ],
  "weekProgress": [ { "phase_id": 1, "week_num": 1, ... } ],
  "dailyActivity": [ { "activity_date": "2024-01-14", ... } ]
}
```

---

## 11. Configuration Files

### package.json
```json
{
  "name": "genai-mastery-hub",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.89.0",
    "lucide-react": "^0.454.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.12.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.11"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 12. Deployment Configuration

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Environment Variables (.env.local)
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Environment Variables Template (.env.example)
```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## 13. API Patterns & Data Flow

### Supabase Table Schema (Inferred)

**user_progress**:
```sql
- user_id (PK)
- xp: integer
- level: integer
- streak: integer
- current_phase: integer
- current_week: integer
- total_hours_studied: float
- start_date: timestamp
- last_visit: timestamp
```

**completed_tasks**:
```sql
- user_id (FK)
- task_id (unique per user)
- completed: boolean
- completed_at: timestamp
- xp_earned: integer
- hours_spent: float
```

**phase_progress**:
```sql
- user_id (FK)
- phase_id
- completed_tasks: integer
- total_tasks: integer
- percentage: float
- is_unlocked: boolean
- is_completed: boolean
- started_at: timestamp
- completed_at: timestamp
```

**week_progress**:
```sql
- user_id (FK)
- phase_id
- week_num
- completed_tasks: integer
- total_tasks: integer
- percentage: float
- is_completed: boolean
- completed_at: timestamp
```

**daily_activity**:
```sql
- user_id (FK)
- activity_date (unique per user)
- tasks_completed: integer
- xp_earned: integer
- hours_studied: float
```

---

## 14. Code Examples & Snippets

### Creating a New Task Card
```jsx
<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
  <div className="flex justify-between">
    <span className="text-gray-500 text-sm">9:00 AM</span>
    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
      +50 XP
    </span>
  </div>
  <h3 className="font-bold text-lg mt-2">Task Title</h3>
  <p className="text-gray-600 text-sm mt-1">Task description...</p>
  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
    Mark Complete
  </button>
</div>
```

### Adding a New Phase
```javascript
// In curriculum.js, add to phases array:
{
  id: 5,  // Next available ID
  title: "New Phase Title",
  weeks: 4,
  hoursPerWeek: 25,
  color: "from-teal-500 to-cyan-500",
  icon: SomeIcon,  // Import from lucide-react
  description: "Phase description",
  skillProgress: "Skill 0/10 → 8/10",
  projects: [
    { name: "Project Name", week: 21, tech: "Tech Stack" }
  ],
  weeks_detail: [
    // Add week structures...
  ]
}
```

### Creating a Stats Card Component
```jsx
const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${color}-500`}>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-semibold text-gray-500">{label}</span>
      <Icon className={`text-${color}-500`} size={20} />
    </div>
    <div className="text-3xl font-bold text-gray-800">{value}</div>
  </div>
);
```

---

## Summary

This codebase implements a comprehensive gamified learning platform with:

1. **React 18 + Vite** for fast, modern frontend development
2. **Tailwind CSS** for utility-first styling with custom animations
3. **Supabase** for backend with localStorage fallback for offline support
4. **Lucide React** for consistent iconography
5. **State management** through React useState hooks in Dashboard component
6. **2,321 lines of curriculum data** covering 20 weeks of AI/ML learning
7. **Gamification** with XP, levels, streaks, and achievements
8. **Progress persistence** with export/import functionality
9. **Phase unlock system** requiring 80% completion
10. **Multiple views**: Dashboard, Learning, Interview, Portfolio, Charts

The application is designed to work both with and without Supabase, making it suitable for demo deployments while supporting full user accounts when configured.

---

*Document generated for Google AI Studio analysis. Last updated: May 2025*
