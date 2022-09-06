// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
//import "firebase/auth"
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUaTNwEkUQysTFefKxP7qjemKpukSFMI",
  authDomain: "study-plan-9b81f.firebaseapp.com",
  projectId: "study-plan-9b81f",
  storageBucket: "study-plan-9b81f.appspot.com",
  messagingSenderId: "1044708559391",
  appId: "1:1044708559391:web:a8c4fad867a3aab2e9232a",
  measurementId: "G-V05BVVLKCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase auth

//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);