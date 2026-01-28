# Gen AI Mastery Hub 🚀

**A personalized, gamified learning platform designed to transform you into a Senior Gen AI Engineer in 20 weeks.**

![Project Banner](https://img.shields.io/badge/Status-Active-success) ![License](https://img.shields.io/badge/License-MIT-blue) ![Version](https://img.shields.io/badge/Version-1.0.0-purple)

---

## 📖 Overview

The **Gen AI Mastery Hub** is more than just a learning dashboard—it's a comprehensive career transformation tool. Built to guide you from a standard engineering role to a high-paying Senior Gen AI Engineer position, it combines structured curriculum, gamification, and portfolio building into a single, cohesive experience.

**Goal:** Master Generative AI, build a production-ready portfolio, and land a 12-15k QAR+ role.

---

## ✨ Key Features

### 🔐 Authentication & Personalization
- **Secure Login**: Sign up via Email/Password, Google, or GitHub.
- **Gender-Based Experience**: Tailored interface and motivational content for **Guys** (🏎️ BMW/Success focus) and **Queens** (👑 Self-worth/Empowerment focus).
- **Profile Management**: Update your name and gender preferences anytime via Settings.

### 📚 Structured Learning Path
- **20-Week Curriculum**: Divided into 4 phases, from Python basics to Advanced Gen AI.
- **Daily Tasks**: Clear, actionable tasks for every day of the week.
- **Progress Tracking**: Visual indicators for completed weeks and phases.

### 🎮 Gamification
- **XP System**: Earn experience points for every task completed.
- **Streaks**: Track your consistency with daily streak counters.
- **Levels**: Level up as you gain more XP and master new skills.
- **Badges**: Unlock achievements for milestones reached.

### 💼 Career Tools
- **Portfolio Builder**: Track and showcase your 12+ capstone projects.
- **Interview Prep**: Curated questions and answers tailored to your experience.
- **Resume Builder**: (Coming Soon) Tools to craft the perfect AI resume.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **Backend/Auth**: Supabase (Authentication & Database)
- **Deployment**: Vercel (Recommended)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RavindraKupatkar/GenAI-Mastery-Roadmap.git
   cd GenAI-Mastery-Roadmap/learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
learning-platform/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AuthPage.jsx       # Login/Signup screens
│   │   ├── DashboardView.jsx  # Main user dashboard
│   │   ├── LearningView.jsx   # Daily curriculum view
│   │   ├── ProfileSettings.jsx # User settings
│   │   └── ...
│   ├── context/           # Global state (AuthContext)
│   ├── data/              # Static data (Curriculum, Questions)
│   ├── services/          # API services (Supabase)
│   └── App.jsx            # Main application entry
├── public/                # Static assets (Images, Icons)
└── README.md              # Project documentation
```

---

## 🌍 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and import your repository.
3. Add your Environment Variables (`VITE_SUPABASE_URL`, etc.) in the Vercel dashboard.
4. Click **Deploy**.

For more details, check the [Deployment Guide](./FREE_DEPLOYMENT_GUIDE.md).

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or curriculum improvements:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by Ravindra Kupatkar</p>
  <p><i>Master AI. Engineer Your Dreams.</i></p>
</div>
