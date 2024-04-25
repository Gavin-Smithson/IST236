// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwsRsBiF8ua5PqSKXNHE7WweX2WQfpzzE",
  authDomain: "fireiditproject.firebaseapp.com",
  databaseURL: "https://fireiditproject-default-rtdb.firebaseio.com",
  projectId: "fireiditproject",
  storageBucket: "fireiditproject.appspot.com",
  messagingSenderId: "337409340652",
  appId: "1:337409340652:web:0ce661e1dd156953a621c9",
  measurementId: "G-LVZ36BSF4B"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_DB = getFirestore(FIREBASE_APP);
export default FIREBASE_DB;

// export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
// const analytics = getAnalytics(app);