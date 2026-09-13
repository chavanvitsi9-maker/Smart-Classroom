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
 * Seed Default Data if Firebase Database is empty
 */
async function seedInitialDataIfEmpty() {
  try {
    const subjectsSnap = await db.ref('Subjects').once('value');
    if (!subjectsSnap.exists()) {
      console.log('🌱 Seeding initial Subjects data to Firebase...');
      const defaultSubjects = {
        "CS101": { Subject_ID: "CS101", Subject_Name: "วิทยาการคำนวณ", Room: "ม.1/1" },
        "TH101": { Subject_ID: "TH101", Subject_Name: "ภาษาไทย", Room: "ม.1/1" },
        "MA101": { Subject_ID: "MA101", Subject_Name: "คณิตศาสตร์", Room: "ม.1/1" },
        "SC101": { Subject_ID: "SC101", Subject_Name: "วิทยาศาสตร์", Room: "ม.1/1" }
      };
      await db.ref('Subjects').set(defaultSubjects);
    }

    const studentsSnap = await db.ref('Students').once('value');
    if (!studentsSnap.exists()) {
      console.log('🌱 Seeding initial Students data to Firebase...');
      const defaultStudents = {
        "6601": { Student_ID: "6601", Name_Surname: "ด.ช. สมชาย รักเรียน", No: "1", PIN: "1234", Room: "ม.1/1" },
        "6602": { Student_ID: "6602", Name_Surname: "ด.ญ. สมหญิง ขยันดี", No: "2", PIN: "1234", Room: "ม.1/1" },
        "6603": { Student_ID: "6603", Name_Surname: "ด.ช. กิตติพงษ์ เก่งมาก", No: "3", PIN: "1234", Room: "ม.1/1" }
      };
      await db.ref('Students').set(defaultStudents);
    }

    const assignmentsSnap = await db.ref('Assignments').once('value');
    if (!assignmentsSnap.exists()) {
      console.log('🌱 Seeding initial Assignments data to Firebase...');
      const defaultAssignments = {
        "HW101": {
          Assignment_ID: "HW101",
          Task_Name: "ใบงานที่ 1 การเขียนโปรแกรมเบื้องต้น",
          Description: "ให้นักเรียนสรุปแนวคิดขั้นตอนอัลกอริทึมลงในสมุดหรือส่งเป็นไฟล์",
          Due_Date: "2026-09-30",
          Max_Score: 10,
          Room: "ม.1/1",
          Subject_ID: "CS101",
          Task_Type: "เดี่ยว",
          Submission_Type: "รูปภาพ/ไฟล์"
        }
      };
      await db.ref('Assignments').set(defaultAssignments);
    }

    const teachersSnap = await db.ref('Teachers').once('value');
    if (!teachersSnap.exists()) {
      console.log('🌱 Seeding initial Teacher data to Firebase...');
      const defaultTeachers = {
        "teacher1": {
          Teacher_ID: "teacher1",
          Name_Surname: "คุณครูผู้สอน",
          Password: "123456",
          Phone: "0812345678",
          Email: "teacher@school.ac.th"
        }
      };
      await db.ref('Teachers').set(defaultTeachers);
    }

    const roomsSnap = await db.ref('Rooms').once('value');
    if (!roomsSnap.exists()) {
      const defaultRooms = {
        "ม.1/1": { Room: "ม.1/1", Name: "มัธยมศึกษาปีที่ 1/1" }
      };
      await db.ref('Rooms').set(defaultRooms);
    }

  } catch (err) {
    console.error('Error seeding initial data:', err);
  }
}

// Auto seed on load
seedInitialDataIfEmpty();
