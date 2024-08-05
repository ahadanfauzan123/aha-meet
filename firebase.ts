// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASQBnt5zsjguPu4uVouNYsz4GL_5U-JsA",
  authDomain: "ahameet-5332a.firebaseapp.com",
  projectId: "ahameet-5332a",
  storageBucket: "ahameet-5332a.appspot.com",
  messagingSenderId: "619453524624",
  appId: "1:619453524624:web:98d1cdb7496601e7f34615",
  measurementId: "G-MG6EK91LCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage }