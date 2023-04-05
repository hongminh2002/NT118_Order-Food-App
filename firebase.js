// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ2qChGEuXnKk1KWrLzOjwFcdzUOxbLVI",
  authDomain: "food-app-75e1a.firebaseapp.com",
  projectId: "food-app-75e1a",
  storageBucket: "food-app-75e1a.appspot.com",
  messagingSenderId: "723439870152",
  appId: "1:723439870152:web:a5ec2742782c6420d005fd",
  measurementId: "G-YK3L1T028F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);