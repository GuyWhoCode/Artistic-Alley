import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};

// Initialize Firebase
const initializeFirebase = (): any => {
    if (firebase.apps.length > 0) {
        console.log(firebase.apps)
        return;
    }
    // Guard clause against multiple initializations

    console.log("Firebase database connection has been initialized")
    return initializeApp(firebaseConfig);
};

export const firebaseApp = initializeFirebase();