"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { firebaseApp } from "@/database/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    UserCredential,
} from "firebase/auth";
import SignUp from "@/components/signup";
import { UserFormData, User, Artist } from "@/database/types";
import { getFirestore } from "firebase/firestore";

const createNewUser = async ({email, password, artist, bio}: UserFormData): Promise<void> => {
    const auth = getAuth(firebaseApp);
    try {
        const createdUser: UserCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        alert("User has been successfully created");
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.includes("auth/email-already-in-use")) {
                alert("Error: Email already in use");
                return;
            }
            alert(error.message);
        }
    }
};

export default function Page() {
    const router = useRouter();

    const submitForm = (formData: UserFormData) => {
        createNewUser(formData);
        router.push("/");
    };

    return (
        <main>
            <h1>Sign Up page!</h1>
            <SignUp submitForm={submitForm} />
            <Link href="/">Return Home</Link>
        </main>
    );
}
