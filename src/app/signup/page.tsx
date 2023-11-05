"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { firebaseApp } from "@/database/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    UserCredential,
} from "firebase/auth";
import Login from "@/components/login";

const createNewUser = async (): Promise<void> => {
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;

    // const db = getDatabase(firebaseApp);
    const auth = getAuth(firebaseApp);
    try {
        const createdUser: UserCredential =
            await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
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

    // set(ref(db, "users/" + username), {
    //     username: username,
    //     password: password,
    // });
};

export default function Page() {
    const router = useRouter();

    const submitForm = () => {
        createNewUser();
        router.push("/");
    };

    return (
        <main>
            <h1>Sign Up page!</h1>
            <input type="email" placeholder="Email" id="email" required />
            <Login loginText="Sign Up" submitForm={submitForm} />
            <Link href="/">Return Home</Link>
        </main>
    );
}
