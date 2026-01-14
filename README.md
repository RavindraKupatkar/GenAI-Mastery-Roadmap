# Gen AI Mastery Hub 🚀

**Your personalized 20-week transformation from TCS Engineer to Senior Gen AI Engineer earning 12-15k QAR+**

## 🎯 Purpose

This isn't just another learning platform. This is YOUR journey tracker, accountability system, and portfolio builder - all designed to help you:

- **Never freeze in interviews again** - Master every Gen AI question with confidence
- **Transform Python skills** from 2/10 to 8/10 (production-ready)
- **Build 12 portfolio projects** that prove your expertise
- **Land 12-15k QAR+ offers** with systematic preparation

## ✨ Features

### 📚 Structured Learning Path
- **4 Phases, 20 Weeks** of curated content
- Daily schedules with morning/night sessions
- Every task mapped to AI/ML relevance
- Direct connections to real TCS projects

### 🎮 Gamification & Progress Tracking
- **XP System** - Earn points for every completed task
- **Level Up** - Visual progress as you advance
- **Streak Tracking** - Build consistency, never break the chain
- **Task Completion** - Check off tasks and watch your progress grow
- **Phase Unlock System** 🔓 - Complete 80% to unlock next phase
- **Progress Charts** 📊 - Visual analytics of XP, hours, tasks
- **Continue Where You Left Off** ➡️ - Smart button to resume learning
- **Export/Import Progress** 💾 - Backup and restore your data
- **Activity Heatmap** 🔥 - 30-day visual activity tracker

### 💼 Portfolio Builder
- Track all 12 projects you'll build
- Guidelines for making each project shine
- Direct links to repos and demos
- Portfolio website planning

### 🎯 Interview Preparation
- Curated Gen AI interview questions
- Answers tied to YOUR experience
- Practice strategies for confidence
- System design case studies

### 📊 Smart Dashboard
- Visual overview of your journey
- Current phase and week tracking
- Hours invested and XP earned
- Motivational reminders of your goal

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the learning platform directory
cd learning-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
learning-platform/
├── src/
│   ├── components/
│   │   ├── DashboardView.jsx      # Main dashboard with stats
│   │   ├── PhaseView.jsx          # Phase overview and weeks
│   │   ├── LearningView.jsx       # Daily task tracking
│   │   ├── InterviewPrepView.jsx  # Interview questions
│   │   ├── PortfolioView.jsx      # Portfolio projects
│   │   └── Sidebar.jsx            # Navigation sidebar
│   ├── data/
│   │   └── curriculum.js          # All learning content
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎓 How to Use

### 1. Start from Dashboard
- See your overall progress
- View current week's mission
- Check your streak and XP

### 2. Navigate to Learning Path
- Click on Phase 1 (Python for AI/ML)
- Select Week 1
- Start with Monday

### 3. Complete Daily Tasks
- Read each task carefully
- Click the circle icon to mark as complete
- Earn XP and level up
- Track your daily progress

### 4. Build Projects
- Weekend projects are your portfolio pieces
- Follow the requirements
- Document everything
- Add to GitHub

### 5. Prepare for Interviews
- Review interview questions section
- Practice answering out loud
- Connect answers to your TCS experience
- Record yourself for confidence

## 💾 Progress Persistence

Your progress is automatically saved to browser localStorage:
- Completed tasks
- XP and level
- Streak count
- Total hours studied

**Note**: Clear browser data will reset progress. Consider exporting your data periodically.

## 🎨 Customization

### Adding New Content

Edit `src/data/curriculum.js` to:
- Add new phases or weeks
- Create additional tasks
- Update interview questions
- Modify portfolio projects

### Styling

The app uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- Component files - Component-specific styles

## 🔥 Tips for Success

1. **Be Consistent** - Study daily, even if just 1 hour
2. **Track Everything** - Check off tasks as you complete them
3. **Build in Public** - Share your projects on GitHub
4. **Practice Interviews** - Use the prep section weekly
5. **Connect to TCS** - Relate everything to your experience

## 📝 Development Roadmap

### Current Features ✅
- Complete 4-phase curriculum structure
- Week 1 detailed daily breakdown
- Task tracking with XP system
- Progress persistence
- Interview prep section
- Portfolio tracker

### Future Enhancements 🎯
- Week 2-20 detailed daily content
- Export/import progress
- Charts and analytics
- Community features
- Mobile app version
- AI-powered study assistant

## 🤝 Contributing

This is a personal learning journey tracker, but if you want to adapt it:

1. Fork the repository
2. Customize curriculum to your needs
3. Add your own phases and projects
4. Share your version!

## 📄 License

MIT License - Feel free to use and modify for your learning journey

## 🎯 Your Goal

**Remember**: You're not just learning to code. You're transforming into a confident Senior Gen AI Engineer who:
- Writes production-ready Python
- Builds real AI systems
- Answers any interview question with confidence
- Commands 12-15k QAR+ salary

**Start Date**: Week 1, Day 1, Monday  
**Target Completion**: 20 weeks from start  
**Expected Outcome**: Multiple job offers, 12-15k QAR+

---

**Built with**: React + Vite + Tailwind CSS  
**Designed for**: Ravindra's Gen AI Mastery Journey  
**Motto**: Never freeze in interviews again 💪

## 🚀 Ready to Start?

```bash
npm run dev
```

Open the dashboard, click "Start Learning Now", and begin your transformation! 🎉

---

## 📦 Deploy Your Learning Platform (Free!)

### Quick Setup

```bash
# Navigate to project
cd d:\AI-Engineering-roadmap\learning-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

### Deploy to Production (Choose One)

#### ⚡ **Vercel** (Recommended - 2 minutes)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! ✅

#### **Netlify** (Also free)
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### **Firebase Hosting** (Free tier available)
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

#### **GitHub Pages**
See [FREE_DEPLOYMENT_GUIDE.md](./FREE_DEPLOYMENT_GUIDE.md)

**For detailed setup and all deployment options, see [FREE_DEPLOYMENT_GUIDE.md](./FREE_DEPLOYMENT_GUIDE.md)**

---

## 🔧 Environment Setup

### Local Development
Create `.env.local` in `learning-platform/`:
```env
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

### Production Deployment
Add these as environment variables in your hosting platform (Vercel/Netlify dashboard)

---

## 📚 Project Structure

```
learning-platform/
├── src/
│   ├── components/        # Dashboard, Sidebar, Views
│   ├── pages/            # Email verification, etc
│   ├── context/          # Auth & State management
│   ├── services/         # Supabase integration
│   ├── data/             # Curriculum content
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
├── FREE_DEPLOYMENT_GUIDE.md  # Deployment instructions
└── README.md             # This file
```

---

## 🤝 Contributing

Want to improve this platform?
- Add curriculum content
- Fix bugs or improve UI
- Enhance features
- Share feedback

---

## 💬 Questions?

- Check [FREE_DEPLOYMENT_GUIDE.md](./FREE_DEPLOYMENT_GUIDE.md) for deployment help
- See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for quick checklist
- Review [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for technical details

---

**Good luck on your Gen AI Mastery journey! 🚀**
