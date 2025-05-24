import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9zhqRvH5Vfynd5YdM9A95uZgVCDv2bT8",
  authDomain: "theoryclothings.firebaseapp.com",
  projectId: "theoryclothings",
  storageBucket: "theoryclothings.firebasestorage.app",
  messagingSenderId: "65841481692",
  appId: "1:65841481692:web:8e5d7d9bd128a85af27119",
  measurementId: "G-D7L9LHX524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);