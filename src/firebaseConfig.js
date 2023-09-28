// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABPLoj01HzxENcbd8A4LvLUQ3X9Wf8tXA",
  authDomain: "projeto-000001.firebaseapp.com",
  databaseURL: "https://projeto-000001-default-rtdb.firebaseio.com",
  projectId: "projeto-000001",
  storageBucket: "buckets/projeto-000001.appspot.com",
  messagingSenderId: "983723824382",
  appId: "1:983723824382:web:bbffd0b5c184574b9c01af",
  measurementId: "G-0KWKP11BRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app