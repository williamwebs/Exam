// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfbfIxs0pP31zrHcWexRXzfz4PWaWHw0",
  authDomain: "random-user-2c98e.firebaseapp.com",
  projectId: "random-user-2c98e",
  storageBucket: "random-user-2c98e.appspot.com",
  messagingSenderId: "930964684970",
  appId: "1:930964684970:web:94fe5e9456876f3f0990d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// SetUp auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect };
