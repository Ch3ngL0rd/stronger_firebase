import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';

// Optionally import the services that you want to use
import {getAuth, initializeAuth} from "firebase/auth"
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFaR35alvp6AOPPmoHFEXnbOEf0U2ABig",
    authDomain: "stronger-df266.firebaseapp.com",
    projectId: "stronger-df266",
    storageBucket: "stronger-df266.appspot.com",
    messagingSenderId: "206608352885",
    appId: "1:206608352885:web:904a83a9c0d4eee8381a3c",
    measurementId: "G-QJXNL0QTT6"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(AsyncStorage)
})