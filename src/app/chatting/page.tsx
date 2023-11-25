import Link from "next/link";
import React from 'react';
import IndividualChatPage from '@/components/individualChatPage';

// `app/chatting/page.tsx` is the UI for the `/chatting` URL
export default function Page() {
    return (
        <main>
            <h1>This is the individual chatting app page.</h1>
                {/* The chat between an artist and a buyer goes here. 
                The messages between 1 artist and 1 buyer are the same. 
                Messages are in real time.
                We need to have individual chatting pages for every 
                connection between an artist and a buyer */}


    <div>
      <h1>Chat App</h1>
      <IndividualChatPage />
    </div>
            <Link href="/">Return Home</Link>
        </main>
    );
}
