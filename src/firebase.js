import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXpOJJOICGyKMCuet2ebgSh8BEroHUlP8",
  authDomain: "kth0813.firebaseapp.com",
  projectId: "kth0813",
  storageBucket: "kth0813.firebasestorage.app",
  messagingSenderId: "693064166669",
  appId: "1:693064166669:web:ebff943e2eb338fb38d444",
  measurementId: "G-5VZJ9GYJYN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, analytics, auth, googleProvider };
