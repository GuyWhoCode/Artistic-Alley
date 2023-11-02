"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const submitForm = async (
    event: React.MouseEvent<HTMLButtonElement>
): Promise<void> => {
    event.preventDefault();
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;

    const createUser = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            email: password.value,
        }),
    });
    const response = await createUser.json();
    if (response.message.includes("auth/email-already-in-use")) {
        alert("Error: Email already in use");
        return;
    }

    alert("User has been successfully created");
};

export default function Page() {
    const router = useRouter();

    return (
        <main>
            <h1>Sign Up page!</h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                />
                <input type="email" placeholder="Email" id="email" required />
                <button
                    id="submit"
                    onClick={(event) => {
                        submitForm(event);
                        router.push("/");
                    }}
                >
                    Submit Form
                </button>
            </form>
            <Link href="/">Return Home</Link>
        </main>
    );
}
