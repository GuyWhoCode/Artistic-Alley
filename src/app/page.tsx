import Link from "next/link";

export default function Page() {
    return (
        <main>
            <h1>Welcome to the home page!</h1>
            <Link href="/profile"> Profile </Link>
            <br />
            <Link href="/signup">Sign up</Link>
            <br />
            <Link href="/login">Login</Link>
            <br />
            <Link href="/messaging">Messaging</Link>
        </main>
    );
}
