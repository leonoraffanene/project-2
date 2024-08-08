// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAESZh0ZwjmjiZDGyj9TM4pYykOZiUgxOk",
  authDomain: "pantry-tracker-27c30.firebaseapp.com",
  projectId: "pantry-tracker-27c30",
  storageBucket: "pantry-tracker-27c30.appspot.com",
  messagingSenderId: "616737856880",
  appId: "1:616737856880:web:112ce8f2f6100d7e3ec3b5",
  measurementId: "G-H759B6BJ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}