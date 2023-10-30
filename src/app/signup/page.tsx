"use client";
import Link from "next/link";

const submitForm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // const username = document.getElementById("username") as HTMLInputElement;
    // const password = document.getElementById("password") as HTMLInputElement;

    const username = "Jason";
    const password = "password";
    const createUser = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    })

    
};

export default function SignUp() {
    return (
        <main>
            <h1>Sign Up page!</h1>
            <form>
                <input type="text" placeholder="Username" id="username" />
                <input type="password" placeholder="Password" id="password" />
                <button id="submit" onClick={submitForm}>
                    Submit Form
                </button>
            </form>
            <Link href="/">Return Home</Link>
        </main>
    );
}
