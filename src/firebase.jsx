import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCKV7kTVaBgmfQmxT2VPzmwOtmi5Y8tSl0",
  authDomain: "the-royal-flush.firebaseapp.com",
  projectId: "the-royal-flush",
  storageBucket: "the-royal-flush.appspot.com",
  messagingSenderId: "887484860830",
  appId: "1:887484860830:web:64fbc10fb88aee14612e8f",
  measurementId: "G-JB6R5XKBNY",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
