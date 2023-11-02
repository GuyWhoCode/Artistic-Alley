import Link from "next/link";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
// `app/profile/page.tsx` is the UI for the `/profile` URL
export default function Page() {
    return (
        <main>
            <h1>Hello, Profile Page!</h1>

            <Link href="/">Return Home</Link>
        </main>
    );
}
