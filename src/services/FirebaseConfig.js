import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // trunk-ignore(gitleaks/gcp-api-key)
  apiKey: "AIzaSyCh7eXpF3rTIkk1sD5U5DfCBJnlN_sfoBQ",
  authDomain: "fir-auth-18ef0.firebaseapp.com",
  projectId: "fir-auth-18ef0",
  storageBucket: "fir-auth-18ef0.appspot.com",
  messagingSenderId: "271519151466",
  appId: "1:271519151466:web:37bea7584c32604f7ee113",
  measurementId: "G-QJ1ZNE5GLC"
};

export const app = initializeApp(firebaseConfig);
