// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, collectionGroup, addDoc, getDoc, getDocs, setDoc, updateDoc, doc, onSnapshot, query, where} from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(app);
const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export { auth, app, db, storage, collection, collectionGroup, addDoc, getDoc, getDocs, setDoc, updateDoc, doc, onSnapshot, query, where };

// // Import the functions you need from the SDKs you need
// //import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// /*const firebaseConfig = {
//   apiKey: "AIzaSyAZ2qChGEuXnKk1KWrLzOjwFcdzUOxbLVI",
//   authDomain: "food-app-75e1a.firebaseapp.com",
//   projectId: "food-app-75e1a",
//   storageBucket: "food-app-75e1a.appspot.com",
//   messagingSenderId: "723439870152",
//   appId: "1:723439870152:web:a5ec2742782c6420d005fd",
//   measurementId: "G-YK3L1T028F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); */