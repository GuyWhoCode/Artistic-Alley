"use client";
import Login from "@/components/login";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { firebaseApp } from "@/database/firebase";
import useCurrentUser, { CurrentUser } from "@/hooks/useCurrentUser";
const auth = getAuth(firebaseApp);

const signIn = async (): Promise<void> => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
    );
};

const signOutUser = async (): Promise<void> => {
    await signOut(auth);
};

export default function Page() {
    const { signedIn, user }: CurrentUser = useCurrentUser();
    return (
        <main>
            <h1>Sign In page!</h1>
            {signedIn ? (
                <button onClick={signOutUser}>Sign Out</button>
            ) : (
                <Login submitForm={signIn} />
            )}
            <h1>{user?.email}</h1>
        </main>
    );
}
