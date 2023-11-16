"use client";
import Login, { LoginFormData } from "@/components/login";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/database/firebase";
import useCurrentUser, { CurrentUser } from "@/hooks/useCurrentUser";

const login = async ({ email, password }: LoginFormData): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
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
                <Login submitForm={login} />
            )}
            <h1>{user?.email}</h1>
        </main>
    );
}
