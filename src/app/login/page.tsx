"use client";
import Link from "next/link";
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
            {signedIn ? (
                <>
                    <h1>Logged in Account Page</h1>
                    <Link href="/profile">Go to your Profile Page.</Link>
                    <br></br>
                    <br></br>
                    <button onClick={signOutUser}>Sign Out</button>
                    <br></br>
                </>
            ) : (
                <>
                    <h1>Sign In page!</h1>
                    <br></br>
                    <Login submitForm={login} />
                </>
            )}

            <h1>{user?.email}</h1>
            <br></br>
            <Link href="/">Return Home</Link>
        </main>
    );
}
