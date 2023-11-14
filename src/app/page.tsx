import Link from "next/link";

export default function Page() {
    return (
        <main>
            <h1>Welcome to the home page!</h1>

            <Link href="/profile">Profile</Link>
            <br />
            <Link href="/signup">Sign Up</Link>
            <br />
            <Link href="/signin">Sign In</Link>
            <br />
            <Link href="/messaging">Messaging</Link>
            <br />
            <Link href="/chatting">Chatting</Link>
            <br />
            <Link href="/cloudinary-setup">Cloudinary Setup</Link>
        </main>
    );
}