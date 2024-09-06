import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXwydF4OrwDiKJs-OKOoUXFdhHl5V2ftY",
  authDomain: "ticketwave-f10a7.firebaseapp.com",
  projectId: "ticketwave-f10a7",
  storageBucket: "ticketwave-f10a7.appspot.com",
  messagingSenderId: "82060192650",
  appId: "1:82060192650:web:48ef6c90fceb90392ff673",
  measurementId: "G-1EYVSCT85T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();