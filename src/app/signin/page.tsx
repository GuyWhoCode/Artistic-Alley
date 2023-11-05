"use client";
import Login from "@/components/login";
import {
    User,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { firebaseApp } from "@/database/firebase";
import { useEffect, useState } from "react";
const auth = getAuth(firebaseApp);

const signIn = async (): Promise<void> => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    const signInFlow = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
    );
    const currentUser: User = signInFlow.user;
};

const signOutUser = async (): Promise<void> => {
    await signOut(auth);
};

export default function Page() {
    const [signedIn, changeLoginStatus] = useState(false);
    const [user, setUser] = useState({} as User);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            changeLoginStatus(true);
            setUser(user);
        } else {
            // User is signed out
            // ...
            changeLoginStatus(false);
            setUser({} as User);
        }
    });
    // useEffect(() => {
    //     console.log(user)
    // }, [signedIn, user]);

    return (
        <main>
            <h1>Sign In page!</h1>
            {signedIn ? (
                <button onClick={signOutUser}>Sign Out</button>
            ) : (
                <Login loginText="Sign In" submitForm={signIn} />
            )}
            <h1>{user?.email}</h1>
        </main>
    );
}
