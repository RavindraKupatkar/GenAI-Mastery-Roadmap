# Supabase Setup Instructions

## Step 1: Run Database Schema

1. Open your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: `genai-mastery-hub`
3. Click **SQL Editor** in left sidebar
4. Click **New Query**
5. Copy the entire contents of `supabase/schema.sql`
6. Paste into the SQL editor
7. Click **Run** (or press Ctrl/Cmd + Enter)
8. You should see: "Success. No rows returned"

## Step 2: Verify Tables Created

Run this query in SQL Editor:
```sql
SELECT tablename FROM pg_tables WHERE schemaname = 'public';
```

You should see:
- user_progress
- completed_tasks
- phase_progress
- week_progress
- daily_activity

## Step 3: Install Supabase Client

Already done! Check package.json - `@supabase/supabase-js` is installed.

## Step 4: Configuration

Your credentials are stored in:
- Project URL: https://pcifmpktxhmtacjtgibd.supabase.co
- Anon Key: sb_publishable_PyMitbEGsp91NUwfmNQtTA_u_hiIXcl

These are configured in `src/services/supabase.js`

## Step 5: Test Connection

After running `npm run dev`, the app will automatically:
1. Connect to Supabase
2. Create a unique user_id (stored in localStorage)
3. Initialize phase_progress (unlock Phase 1)
4. Start tracking your progress

## Security Notes

- Using `anon` key with client-side user_id (simple for single-user app)
- RLS policies allow all operations (safe for personal use)
- To add authentication later: enable Supabase Auth and update RLS policies

## Database Schema Overview

```
user_progress
├─ id (UUID)
├─ user_id (TEXT) - unique identifier
├─ xp, level, streak
├─ current_phase, current_week
└─ total_hours_studied

completed_tasks
├─ user_id, task_id (unique together)
├─ completed_at, xp_earned
└─ hours_spent

phase_progress
├─ user_id, phase_id (unique together)
├─ completed_tasks, total_tasks, percentage
├─ is_unlocked, is_completed
└─ started_at, completed_at

week_progress
├─ user_id, phase_id, week_num (unique together)
├─ completed_tasks, total_tasks, percentage
├─ is_completed
└─ started_at, completed_at

daily_activity
├─ user_id, activity_date (unique together)
├─ tasks_completed, xp_earned
└─ hours_studied
```

## Next Steps

Once you've run the schema in Supabase SQL Editor:
1. Return here and type "Schema is created"
2. I'll continue with the React integration
