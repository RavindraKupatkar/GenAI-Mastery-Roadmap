-- Gen AI Mastery Hub - Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: user_progress
-- Stores main user progress data
-- ============================================
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL UNIQUE,
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    streak INTEGER DEFAULT 0,
    current_phase INTEGER DEFAULT 1,
    current_week INTEGER DEFAULT 1,
    total_hours_studied DECIMAL(10,2) DEFAULT 0,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_visit TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLE: completed_tasks
-- Tracks each completed task
-- ============================================
CREATE TABLE completed_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL,
    task_id TEXT NOT NULL,
    completed BOOLEAN DEFAULT true,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    xp_earned INTEGER DEFAULT 0,
    hours_spent DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, task_id)
);

-- ============================================
-- TABLE: phase_progress
-- Tracks progress for each of the 4 phases
-- ============================================
CREATE TABLE phase_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL,
    phase_id INTEGER NOT NULL,
    completed_tasks INTEGER DEFAULT 0,
    total_tasks INTEGER DEFAULT 0,
    percentage DECIMAL(5,2) DEFAULT 0,
    is_unlocked BOOLEAN DEFAULT false,
    is_completed BOOLEAN DEFAULT false,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, phase_id)
);

-- ============================================
-- TABLE: week_progress
-- Tracks progress for each week
-- ============================================
CREATE TABLE week_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL,
    phase_id INTEGER NOT NULL,
    week_num INTEGER NOT NULL,
    completed_tasks INTEGER DEFAULT 0,
    total_tasks INTEGER DEFAULT 0,
    percentage DECIMAL(5,2) DEFAULT 0,
    is_completed BOOLEAN DEFAULT false,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, phase_id, week_num)
);

-- ============================================
-- TABLE: daily_activity
-- Logs daily activity for charts
-- ============================================
CREATE TABLE daily_activity (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT NOT NULL,
    activity_date DATE NOT NULL,
    tasks_completed INTEGER DEFAULT 0,
    xp_earned INTEGER DEFAULT 0,
    hours_studied DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, activity_date)
);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX idx_completed_tasks_user_id ON completed_tasks(user_id);
CREATE INDEX idx_phase_progress_user_id ON phase_progress(user_id);
CREATE INDEX idx_week_progress_user_id ON week_progress(user_id);
CREATE INDEX idx_daily_activity_user_id ON daily_activity(user_id);
CREATE INDEX idx_daily_activity_date ON daily_activity(activity_date DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE phase_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE week_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_activity ENABLE ROW LEVEL SECURITY;

-- Policies (allow all for now - using client-side user_id)
CREATE POLICY "Allow all operations on user_progress" ON user_progress FOR ALL USING (true);
CREATE POLICY "Allow all operations on completed_tasks" ON completed_tasks FOR ALL USING (true);
CREATE POLICY "Allow all operations on phase_progress" ON phase_progress FOR ALL USING (true);
CREATE POLICY "Allow all operations on week_progress" ON week_progress FOR ALL USING (true);
CREATE POLICY "Allow all operations on daily_activity" ON daily_activity FOR ALL USING (true);

-- ============================================
-- VERIFICATION QUERIES
-- Run these after to verify tables were created
-- ============================================
-- SELECT tablename FROM pg_tables WHERE schemaname = 'public';
-- SELECT * FROM user_progress LIMIT 1;
