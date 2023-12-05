import Link from "next/link";
import React from "react";
import IndividualChatPage from "@/components/individualChatPage";

// `app/chatting/page.tsx` is the UI for the `/chatting` URL
export default function Page() {
    return (
        <main>
            <h1>This is the individual chatting app page.</h1>

            <div>
                <IndividualChatPage />
            </div>
            <br></br>
            <Link href="/messaging">Return to Messages</Link>
        </main>
    );
}
