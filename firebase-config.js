/**
 * Smart Classroom System - Firebase Realtime Database Configuration & Helper Module
 */

const firebaseConfig = {
  apiKey: "AIzaSyBSzuUeBGUXnz8xvGF3TnRr_8ssvwYxU2A",
  authDomain: "smart-classroom-6c776.firebaseapp.com",
  databaseURL: "https://smart-classroom-6c776-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-classroom-6c776",
  storageBucket: "smart-classroom-6c776.firebasestorage.app",
  messagingSenderId: "501892811986",
  appId: "1:501892811986:web:2b3c75612e64650dd3310b",
  measurementId: "G-C03W6RMNC2"
};

// Initialize Firebase App
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Database Reference
const db = firebase.database();

/**
 * Disabled Auto-Seeding for Production Deployment
 * (คุณครูสามารถลบข้อมูลใน Firebase ได้อย่างปลอดภัย โดยระบบจะไม่สร้างข้อมูลตัวอย่างย้อนกลับขึ้นมาอีกต่อไป)
 */
/*
async function seedInitialDataIfEmpty() {
  ...
}
*/
