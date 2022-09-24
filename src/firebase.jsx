// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSl_KGZ68tVSPX-oYo4oysv_RwmWq5ug",
  authDomain: "react-firebase-storage-46a94.firebaseapp.com",
  projectId: "react-firebase-storage-46a94",
  storageBucket: "react-firebase-storage-46a94.appspot.com",
  messagingSenderId: "255367876867",
  appId: "1:255367876867:web:6f3f888d37cf3cf7539936"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export const analytics = getAnalytics(app);
