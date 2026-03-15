# How to Push MedDrive to GitHub

## Option 1: Using GitHub CLI (Recommended)

### Step 1: Install GitHub CLI
Download from: https://cli.github.com/

### Step 2: Authenticate
```bash
gh auth login
```
- Select "GitHub.com"
- Select "HTTPS"
- Select "Login with a web browser"
- Copy the one-time code
- Authorize the CLI

### Step 3: Create Repository & Push
```bash
cd c:/Users/admin/Desktop/meddrive-mvp
gh repo create meddrive-mvp --public --source=. --push
```

---

## Option 2: Using Git (Manual)

### Step 1: Install Git
Download from: https://git-scm.com/

### Step 2: Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "MedDrive Push")
4. Select scopes: ✅ "repo" (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 3: Push to GitHub
```bash
cd c:/Users/admin/Desktop/meddrive-mvp
git init
git add .
git commit -m "MedDrive MVP - Emergency Ambulance Dispatch Platform"
git branch -M main
git remote add origin https://github.com/khalidbuilds/meddrive-mvp.git
git push -u origin main
```
When prompted for password, use your **Personal Access Token** (not your GitHub password!)

---

## Option 3: Using GitHub Desktop

### Step 1: Download GitHub Desktop
https://desktop.github.com/

### Step 2: Add Repository
1. File → Add Local Repository
2. Select `c:/Users/admin/Desktop/meddrive-mvp`
3. Click "Create Repository"
4. Click "Publish repository"
5. Name: `meddrive-mvp`
6. Make it Public
7. Click "Publish Repository"

---

## Quickest Way (5 minutes):

1. **Download GitHub Desktop** from https://desktop.github.com/
2. **Install and open it**
3. **File → Add Local Repository**
4. **Select**: `c:/Users/admin/Desktop/meddrive-mvp`
5. **Click** "Publish Repository"
6. **Name**: `meddrive-mvp`
7. **Make it Public** ✅
8. **Click** "Publish Repository"

Done! 🎉
