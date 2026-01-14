#!/bin/bash
# Quick Deploy Script for GenAI Mastery Hub
# Run this in PowerShell to automate most of the deployment

# Note: You still need to:
# 1. Create GitHub repo at github.com/new
# 2. Create Vercel account at vercel.com
# 3. But this script handles the git commands!

# Configuration - CHANGE THESE!
$USERNAME = "YOUR_GITHUB_USERNAME"  # CHANGE THIS!
$REPO_NAME = "genai-mastery-hub"     # Change if you want different name
$COMMIT_MESSAGE = "GenAI Mastery Hub - Initial commit"

# Colors for output
$Green = "Green"
$Yellow = "Yellow"
$Red = "Red"

Write-Host "========================================" -ForegroundColor $Yellow
Write-Host "GenAI Mastery Hub - Deploy Script" -ForegroundColor $Yellow
Write-Host "========================================" -ForegroundColor $Yellow

# Step 1: Navigate to project
Write-Host "`nStep 1: Navigating to project..." -ForegroundColor $Green
cd d:\AI-Engineering-roadmap\learning-platform

if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: package.json not found! Are you in the right directory?" -ForegroundColor $Red
    exit 1
}

Write-Host "✓ Found package.json - correct directory!" -ForegroundColor $Green

# Step 2: Check if git is initialized
Write-Host "`nStep 2: Initializing Git..." -ForegroundColor $Green
if (Test-Path ".git") {
    Write-Host "✓ Git already initialized" -ForegroundColor $Green
} else {
    git init
    Write-Host "✓ Git initialized" -ForegroundColor $Green
}

# Step 3: Add files
Write-Host "`nStep 3: Adding files to git..." -ForegroundColor $Green
git add .
Write-Host "✓ Files added" -ForegroundColor $Green

# Step 4: First commit
Write-Host "`nStep 4: Creating first commit..." -ForegroundColor $Green
git commit -m "$COMMIT_MESSAGE"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Note: This might be normal if you're committing again" -ForegroundColor $Yellow
}

# Step 5: Configure remote (if not already done)
Write-Host "`nStep 5: Adding GitHub remote..." -ForegroundColor $Green

# Check if remote already exists
$remoteExists = git remote | Select-String "origin"
if ($remoteExists) {
    Write-Host "✓ GitHub remote already configured" -ForegroundColor $Green
} else {
    if ($USERNAME -eq "YOUR_GITHUB_USERNAME") {
        Write-Host "ERROR: Please change USERNAME variable to your GitHub username!" -ForegroundColor $Red
        Write-Host "Edit this script and replace YOUR_GITHUB_USERNAME with your actual username" -ForegroundColor $Red
        exit 1
    }
    
    $remoteURL = "https://github.com/$USERNAME/$REPO_NAME.git"
    Write-Host "Adding remote: $remoteURL" -ForegroundColor $Green
    git remote add origin $remoteURL
    Write-Host "✓ Remote added" -ForegroundColor $Green
}

# Step 6: Set main branch
Write-Host "`nStep 6: Setting up main branch..." -ForegroundColor $Green
git branch -M main
Write-Host "✓ Main branch ready" -ForegroundColor $Green

# Step 7: Push to GitHub
Write-Host "`nStep 7: Pushing to GitHub..." -ForegroundColor $Green
Write-Host "Note: You'll need to authenticate with GitHub" -ForegroundColor $Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================" -ForegroundColor $Green
    Write-Host "✓ SUCCESS! Code pushed to GitHub!" -ForegroundColor $Green
    Write-Host "========================================" -ForegroundColor $Green
    Write-Host "`nNext Steps:" -ForegroundColor $Yellow
    Write-Host "1. Go to: https://vercel.com" -ForegroundColor $Green
    Write-Host "2. Click: + New Project" -ForegroundColor $Green
    Write-Host "3. Select: $REPO_NAME repository" -ForegroundColor $Green
    Write-Host "4. Click: Deploy" -ForegroundColor $Green
    Write-Host "5. Wait: 30-60 seconds for deployment" -ForegroundColor $Green
    Write-Host "6. Share: Your live URL (e.g., genai-mastery-hub.vercel.app)" -ForegroundColor $Green
    Write-Host "`nYour GitHub repo: https://github.com/$USERNAME/$REPO_NAME" -ForegroundColor $Yellow
} else {
    Write-Host "`nERROR: Could not push to GitHub" -ForegroundColor $Red
    Write-Host "Common issues:" -ForegroundColor $Yellow
    Write-Host "- Username in remote URL is wrong" -ForegroundColor $Yellow
    Write-Host "- GitHub credentials not configured" -ForegroundColor $Yellow
    Write-Host "- Repository doesn't exist yet (create at github.com/new)" -ForegroundColor $Yellow
}
