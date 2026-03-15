# MedDrive MVP 🚑

Emergency Ambulance Dispatch Platform for Addis Ababa, Ethiopia

## Overview

MedDrive is a digital platform designed to connect individuals in need of emergency medical transport with the nearest available ambulance. The system allows users to request an ambulance in an emergency, automatically locate nearby ambulance providers, dispatch ambulances efficiently, and track ambulance arrival in real-time.

## Features

- 🚨 **Quick Emergency Request** - One-tap ambulance request
- 📍 **Real-Time Tracking** - Track ambulance arrival on map
- 🏥 **Hospital Network** - Connected with major hospitals
- 👨‍💼 **Admin Dashboard** - Manage and dispatch ambulances
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Firestore, Auth)
- **Hosting**: Vercel / Firebase Hosting

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/khalidbuilds/meddrive-mvp.git
cd meddrive-mvp
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project "MedDrive"
3. Enable Firestore Database
4. Copy your Firebase config
5. Update `firebaseConfig` in both `index.html` and `admin.html`

### 3. Run Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit http://localhost:8000

### 4. Admin Login

- **URL**: `/admin.html`
- **Email**: admin@meddrive.et
- **Password**: admin123

## Project Structure

```
meddrive-mvp/
├── index.html          # Landing page with emergency request form
├── admin.html          # Admin dashboard for dispatch management
├── firebase-config.js  # Firebase configuration guide
└── README.md          # This file
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel`
3. Follow the prompts

### Deploy to Firebase Hosting

1. Install Firebase CLI: `npm i -g firebase-tools`
2. Run `firebase init hosting`
3. Select your project
4. Set public directory to `.`
5. Configure as single-page app: `Yes`
6. Run `firebase deploy`

## License

MIT License

## Author

- GitHub: [khalidbuilds](https://github.com/khalidbuilds)
