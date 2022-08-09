// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQyE-GJEOY9FSLLoWlldighkOpNL6bSiM",
  authDomain: "my-e-clone-60fcb.firebaseapp.com",
  projectId: "my-e-clone-60fcb",
  storageBucket: "my-e-clone-60fcb.appspot.com",
  messagingSenderId: "61913849214",
  appId: "1:61913849214:web:21214fed6682667470672f",
  measurementId: "G-KKBPXGHL4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);