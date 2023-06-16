import { initializeApp } from "firebase/app";
import { getAuth,FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIRp74ivA78injlxwSQAbAYXLddiM6guQ",
  authDomain: "whatsapp-clone-d6f0c.firebaseapp.com",
  projectId: "whatsapp-clone-d6f0c",
  storageBucket: "whatsapp-clone-d6f0c.appspot.com",
  messagingSenderId: "753907613126",
  appId: "1:753907613126:web:024a34a0eba9c854c506c7",
  measurementId: "G-S8RKHYJH9J"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const Authentication = getAuth(app);
const provider = new FacebookAuthProvider();

export {Authentication, provider};