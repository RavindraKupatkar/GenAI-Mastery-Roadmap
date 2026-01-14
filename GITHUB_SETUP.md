# 🚀 GitHub Setup & Deployment Guide

You're ready to publish! Follow these simple steps to get your app live on the internet.

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Easiest)

1. Go to [github.com/new](https://github.com/new)
2. Fill in:
   - **Repository name**: `genai-mastery-hub` (or whatever you prefer)
   - **Description**: "GenAI Mastery Hub - Your 20-week Gen AI Engineering Learning Platform"
   - **Public**: Yes (so others can see it)
   - **Add .gitignore**: Select "Node"
   - **Add License**: Select "MIT"
3. Click **"Create Repository"**
4. Copy the commands shown under "push an existing repository from the command line"

### Option B: Using Command Line

```powershell
# Navigate to project
cd d:\AI-Engineering-roadmap\learning-platform

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: GenAI Mastery Hub learning platform"

# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Push Your Code to GitHub

If you chose Option A, GitHub will show you the exact commands. Run them:

```powershell
cd d:\AI-Engineering-roadmap\learning-platform
git remote add origin https://github.com/YOUR_USERNAME/genai-mastery-hub.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Deploy to Vercel (Recommended - 2 minutes!)

### Step 3a: Sign Up on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 3b: Deploy Your Project

1. Click **"+ New Project"** (top right)
2. Select your repository: `genai-mastery-hub`
3. Click **"Import"**
4. Vercel auto-detects Vite! Settings should be:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
5. Click **"Deploy"**
6. Wait 30-60 seconds...
7. **🎉 Your app is LIVE!** You'll get a URL like `genai-mastery-hub.vercel.app`

### ✅ You're Done!

Your app is now live on the internet with:
- ✅ Free hosting (unlimited updates)
- ✅ Automatic HTTPS/SSL
- ✅ CDN for fast loading worldwide
- ✅ Automatic deployments on every GitHub push

---

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"** → Choose GitHub
3. Click **"New site from Git"**
4. Select your repository
5. Netlify auto-detects Vite settings
6. Click **"Deploy Site"**
7. Done! Your URL will be something like `genai-mastery-hub.netlify.app`

---

## Alternative: Deploy to Firebase

```powershell
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Build the project
npm run build

# Deploy
firebase deploy
```

---

## Custom Domain (Optional)

Want your own domain like `genaimastery.com`?

### Free Domain Option
1. Go to [freenom.com](https://freenom.com)
2. Search for a domain name
3. Get it free for 12 months
4. In Vercel/Netlify settings, add custom domain

### Cheap Domain Option
1. Go to [namecheap.com](https://namecheap.com)
2. Search domain (usually $0.88/year first year)
3. Complete purchase
4. In Vercel/Netlify settings, add custom domain and update nameservers

---

## Automatic Deployments (Magic!)

Once you push to GitHub:
1. Every time you update code on `main` branch
2. Vercel/Netlify automatically rebuilds and redeploys
3. Your site updates instantly - no manual steps needed!

Example workflow:
```powershell
# Make changes to your code
# Then:
git add .
git commit -m "Add new features"
git push origin main

# Wait 30 seconds... your site is updated! ✨
```

---

## Environment Variables on Production

If you enabled Supabase features, add env vars to your hosting:

### On Vercel:
1. Go to your project settings
2. Click **"Environment Variables"**
3. Add:
   - `VITE_SUPABASE_URL` = your URL
   - `VITE_SUPABASE_ANON_KEY` = your key
4. Redeploy

### On Netlify:
1. Go to Site settings → Build & deploy
2. Click **"Environment"**
3. Add same variables
4. Redeploy

---

## Troubleshooting

### "Build failed" error?
1. Make sure `npm run build` works locally
2. Check `vite.config.js` exists
3. Check all imports use correct file paths

### "Cannot find module" error?
Make sure you committed all files:
```powershell
git add .
git commit -m "Add all files"
git push
```

### App shows blank page?
Check browser console for errors. Most common causes:
- Wrong environment variables
- Missing imports in components
- Typos in file paths

---

## Share Your App!

Once deployed, you have a public URL. Share it with:
- 👔 **Recruiters** - "Check out my Gen AI learning platform"
- 👥 **Friends** - "I built this learning platform!"
- 📱 **Social Media** - Post about your project
- 🎓 **Portfolio** - Link to this from your resume

---

## What's Next?

### Easy Improvements
- [ ] Add your own custom domain
- [ ] Customize colors in `tailwind.config.js`
- [ ] Add more curriculum content
- [ ] Enable Supabase for data persistence

### Medium Improvements
- [ ] Add user authentication (with Supabase Auth)
- [ ] Connect to database for progress saving
- [ ] Add social sharing features
- [ ] Create mobile app (React Native)

### Advanced Improvements
- [ ] Add email notifications
- [ ] Create learning groups/communities
- [ ] Add AI-powered recommendations
- [ ] Monetize with course certificates

---

## Git Commands Cheat Sheet

```powershell
# Check status
git status

# Add changes
git add .
git add filename.js      # Add specific file

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name
git push origin feature-name

# Switch branches
git checkout main
git checkout feature-name
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Docs**: https://docs.github.com
- **Firebase Docs**: https://firebase.google.com/docs

---

## Summary: 3 Steps to Live

1. **Push to GitHub** (5 minutes)
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/genai-mastery-hub.git
   git push -u origin main
   ```

2. **Connect to Vercel** (2 minutes)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repo
   - Click "Deploy"

3. **Done!** 🎉
   - Your URL: `genai-mastery-hub.vercel.app`
   - Share with the world!

---

**You've got this! 🚀 Your Gen AI learning platform will be live in less than 10 minutes.**
