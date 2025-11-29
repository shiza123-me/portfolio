
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsycRaCXDPlfZuy2Lptt8s5fZIbh0SiLo",
  authDomain: "portfolio-9eaa4.firebaseapp.com",
  projectId: "portfolio-9eaa4",
  storageBucket: "portfolio-9eaa4.firebasestorage.app",
  messagingSenderId: "300209054904",
  appId: "1:300209054904:web:019a4f0bd0fc351bc6c04d",
  measurementId: "G-TB9E1ZQGJ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);