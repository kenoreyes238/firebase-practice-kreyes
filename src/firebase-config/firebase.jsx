import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCs2YgVLUAf9c17iE4ykuaGjX4_guDBuhY",
  authDomain: "fir-practice-c04c0.firebaseapp.com",
  projectId: "fir-practice-c04c0",
  storageBucket: "fir-practice-c04c0.appspot.com",
  messagingSenderId: "225008028307",
  appId: "1:225008028307:web:0ec8480ef22b2c6c005b66",
  measurementId: "G-FYBECMJZPF"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
