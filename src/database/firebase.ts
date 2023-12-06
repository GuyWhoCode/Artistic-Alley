import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDjJXiSe8NLbQmIEQ1Jp0bJt0nvmpfsqgY",
    authDomain: "test-db-4c9b3.firebaseapp.com",
    projectId: "test-db-4c9b3",
    storageBucket: "test-db-4c9b3.appspot.com",
    messagingSenderId: "670488527506",
    appId: "1:670488527506:web:ac82e677dc91342701dc4b",
};

const initializeFirebase = () => {
    if (getApps().length === 0) {
        console.log("Firebase has been initialized");
        return initializeApp(firebaseConfig);
    }
    return getApps()[0];
};

const firebaseApp = initializeFirebase();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
