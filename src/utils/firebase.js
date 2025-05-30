// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPARRgoiHTvKHCr3zgB1_mHHZe1Pmqg08",
  authDomain: "netflix-gpt-6772b.firebaseapp.com",
  projectId: "netflix-gpt-6772b",
  storageBucket: "netflix-gpt-6772b.firebasestorage.app",
  messagingSenderId: "55885756662",
  appId: "1:55885756662:web:d25b8b3e64426bbbd214d7",
  measurementId: "G-WLZZ969W4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();