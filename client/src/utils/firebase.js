import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "interviewiq-73f53.firebaseapp.com",
  projectId: "interviewiq-73f53",
  storageBucket: "interviewiq-73f53.firebasestorage.app",
  messagingSenderId: "143375523480",
  appId: "1:143375523480:web:1634649e67dc8f6bd7faed",
};

const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {auth,provider}