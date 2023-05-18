import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABr6tGnGAVKmr2GsMwDjcgXTaw2eGyKBg",
  authDomain: "rn-food-app-bb784.firebaseapp.com",
  projectId: "rn-food-app-bb784",
  storageBucket: "rn-food-app-bb784.appspot.com",
  messagingSenderId: "426199211020",
  appId: "1:426199211020:web:2329a84433e28e7db76229",
  measurementId: "G-DPSS4KHNC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
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
const analytics = getAnalytics(app); */