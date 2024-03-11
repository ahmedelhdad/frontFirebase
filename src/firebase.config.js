import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABfyFPw2RUibP2gpqQ-Ok8IQOhWsvRnmQ",
  authDomain: "react-project-368201.firebaseapp.com",
  databaseURL: "https://react-project-368201-default-rtdb.firebaseio.com",
  projectId: "react-project-368201",
  storageBucket: "react-project-368201.appspot.com",
  messagingSenderId: "889557700945",
  appId: "1:889557700945:web:094a2bea296b39931ac370",
  measurementId: "G-P4XPJ3MJ5G"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
