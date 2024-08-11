// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHirVXITg8nKx6QpJoifnt8gWOtu26Sy4",
  authDomain: "journal-react-app-3bf22.firebaseapp.com",
  projectId: "journal-react-app-3bf22",
  storageBucket: "journal-react-app-3bf22.appspot.com",
  messagingSenderId: "956458133961",
  appId: "1:956458133961:web:477680f1e5cdc783c22018",
  measurementId: "G-ZMR4JPYL3Z"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)

const analytics = getAnalytics(FirebaseApp);