
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDc_y5tNppnp_KJ4UJQgm1wGqeGc99lC8Q",
  authDomain: "grid-5-21fb2.firebaseapp.com",
  projectId: "grid-5-21fb2",
  storageBucket: "grid-5-21fb2.appspot.com",
  messagingSenderId: "952576100436",
  appId: "1:952576100436:web:17c5f85a95b46502ee45c1",
  measurementId: "G-ZMD0S21SB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};