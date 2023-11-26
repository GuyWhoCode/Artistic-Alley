import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCLCtwFZ_qhviFY6QF-cYhn3qob9IRfEAM",
    authDomain: "artistic-7e92c.firebaseapp.com",
    databaseURL: "https://artistic-7e92c-default-rtdb.firebaseio.com",
    projectId: "artistic-7e92c",
    storageBucket: "artistic-7e92c.appspot.com",
    messagingSenderId: "677063916855",
    appId: "1:677063916855:web:dec4da0e5b70f6c5406eb2",
};

const initializeFirebase = () => {
    if (getApps().length === 0) {
        console.log("Firebase has been initialized");
        return initializeApp(firebaseConfig);
    }
    return getApps()[0];
}

const firebaseApp = initializeFirebase();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
