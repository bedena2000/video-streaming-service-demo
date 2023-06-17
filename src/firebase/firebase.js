import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Auth
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDxFs6KygTJqoqlNe32KWcTM06vQdG3g1E",
  authDomain: "video-streaming-test-95b2b.firebaseapp.com",
  projectId: "video-streaming-test-95b2b",
  storageBucket: "video-streaming-test-95b2b.appspot.com",
  messagingSenderId: "257929086270",
  appId: "1:257929086270:web:1c30133bf607b9a92bd86f",
  measurementId: "G-EPC5248VC4"
};

export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication

export const auth = getAuth(app);






const analytics = getAnalytics(app);