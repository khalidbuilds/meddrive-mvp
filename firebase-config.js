// ============================================
// Firebase Configuration for MedDrive
// ============================================
// 
// To set up Firebase for MedDrive:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project named "MedDrive"
// 3. Enable Firestore Database
// 4. Copy your configuration below
// 5. Update the firebaseConfig in both index.html and admin.html
//
// ============================================

// Your Firebase Configuration - UPDATE THESE VALUES
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "meddrive-xxxxx.firebaseapp.com",
    projectId: "meddrive-xxxxx",
    storageBucket: "meddrive-xxxxx.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456"
};

// Database Collection Name
const COLLECTION_REQUESTS = "emergency_requests";

// ============================================
// SETUP INSTRUCTIONS
// ============================================
//
// 1. Create Firebase Project:
//    - Go to https://console.firebase.google.com/
//    - Click "Add project"
//    - Enter "MedDrive" as project name
//    - Disable Google Analytics (for MVP)
//    - Wait for project to be created
//
// 2. Enable Firestore Database:
//    - Go to "Firestore Database" in left menu
//    - Click "Create database"
//    - Choose "Start in test mode" (for development)
//    - Click "Enable"
//
// 3. Get Configuration:
//    - Go to Project Settings (gear icon)
//    - Scroll to "Your apps"
//    - Click the web icon </>
//    - Register app (e.g., "MedDrive Web")
//    - Copy the firebaseConfig object
//    - Replace the values above
//
// 4. Update HTML Files:
//    - Open index.html and admin.html
//    - Find the firebaseConfig section
//    - Replace the placeholder values with your actual values
//
// ============================================
//
// FIRESTORE DATABASE RULES (for production):
// ------------------------------------------------
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /emergency_requests/{requestId} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
// ============================================

console.log("MedDrive Firebase Config loaded!");
