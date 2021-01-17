import firebase from "firebase/app";
import "firebase/firestore"; // If using Firebase database
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDY61IwsPpm7bDPswk7ISL28xz_HJ-rPbY",
  authDomain: "fac-mart.firebaseapp.com",
  projectId: "fac-mart",
  storageBucket: "fac-mart.appspot.com",
  messagingSenderId: "430702979963",
  appId: "1:430702979963:web:2176b81994c5754c346bde",
  measurementId: "G-8P0MXR65PG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth();

function registerUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}
function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export { registerUser, loginUser };
