# 🚀 Free Deployment Guide (Vercel)

This guide will help you deploy your **Gen AI Mastery Hub** to the internet for free using Vercel.

---

## ⚡ Step 1: Push to GitHub (Already Done!)
You have already pushed your code to GitHub.
**Repo URL**: `https://github.com/RavindraKupatkar/GenAI-Mastery-Roadmap`

---

## ⚡ Step 2: Deploy on Vercel

1.  **Go to [Vercel.com](https://vercel.com)** and Log In (you can use your GitHub account).
2.  Click **"Add New..."** -> **"Project"**.
3.  You should see your `GenAI-Mastery-Roadmap` repository. Click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect "Vite". If not, select "Vite".
    *   **Root Directory**: Leave as `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).

5.  **⚠️ CRITICAL STEP: Environment Variables**
    *   Expand the **"Environment Variables"** section.
    *   You need to add the same variables from your `.env.local` file:
    
    | Name | Value |
    |------|-------|
    | `VITE_SUPABASE_URL` | Your Supabase Project URL |
    | `VITE_SUPABASE_ANON_KEY` | Your Supabase Anon Key |

    *   *Tip: You can copy these from your local `.env.local` file or Supabase Dashboard.*

6.  Click **"Deploy"**.
    *   Wait about 1-2 minutes.
    *   🎉 You will get a live URL (e.g., `https://genai-mastery-hub.vercel.app`).

---

## ⚡ Step 3: Configure Supabase for Production

**This is the most important step for Login to work!**

1.  Copy your new **Vercel URL** (e.g., `https://genai-mastery-hub.vercel.app`).
2.  Go to your **Supabase Dashboard** -> **Authentication** -> **URL Configuration**.
3.  **Site URL**: Change this to your Vercel URL (e.g., `https://genai-mastery-hub.vercel.app`).
4.  **Redirect URLs**: Add the following:
    *   `https://genai-mastery-hub.vercel.app`
    *   `https://genai-mastery-hub.vercel.app/auth/callback`
    *   *(Replace `genai-mastery-hub.vercel.app` with your actual Vercel domain)*
5.  Click **Save**.

---

## ⚡ Step 4: Configure OAuth Providers (Google/GitHub)

If you are using Google or GitHub login:

1.  **Google Cloud Console**:
    *   Go to APIs & Services -> Credentials.
    *   Edit your OAuth 2.0 Client.
    *   Add your Vercel URL to **"Authorized Javascript Origins"**.
    *   Add `https://<your-supabase-project>.supabase.co/auth/v1/callback` to **"Authorized redirect URIs"** (This should already be there).

2.  **GitHub Developer Settings**:
    *   You don't need to change anything if you used the Supabase Callback URL.

---

## ✅ Done!

Your app is now live and fully functional! 🚀
