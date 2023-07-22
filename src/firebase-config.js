import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvxJwp8V7lWJ5D0yy_WroCDUQWWUcabkY",
  authDomain: "student-details-a3a94.firebaseapp.com",
  projectId: "student-details-a3a94",
  storageBucket: "student-details-a3a94.appspot.com",
  messagingSenderId: "261723083482",
  appId: "1:261723083482:web:45986c2a3fef8809234be3",
  measurementId: "G-D45RDCR69V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);