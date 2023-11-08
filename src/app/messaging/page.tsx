import Link from "next/link";
import "../globals.css";

export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            {/* 
            TODO:
            We need to build just the front end of the messaging page
            I think we're going to need components for the messaging boxes and we need to figure out how to change chats when u click
            Firstly if we just design the general layout that would be great
            */}
            <Link href="/">Return Home</Link>
        </main>
    );
}
