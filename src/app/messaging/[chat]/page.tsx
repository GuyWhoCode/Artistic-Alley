"use client";
import { db } from "@/database/firebase";
import { addDoc, collection, doc, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import ChatMessage from "@/app/messaging/message";
import { Message } from "@/database/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCollection } from "react-firebase-hooks/firestore";
import useUserData from "@/hooks/useUserData";

export default function Chat({ params }: { params: { chat: string } }) {
    const [currentUser] = useUserData();

    const [input, setInput] = useState("");
    const currentRoom = doc(collection(db, "chats"), params.chat);
    const [messages, loading] = useCollection(
        query(collection(currentRoom, "messages"), orderBy("timestamp"))
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentUser?.id === undefined)
            return console.error("User not found");
        const messageData: Omit<Message, "id"> = {
            userId: currentUser.id,
            body: input,
            timestamp: Date.now(),
            imageId: [],
        };
        setInput("");
        addDoc(collection(currentRoom, "messages"), messageData).catch(
            (err) => {
                console.log(err);
            }
        );
    };
    return (
        <>
            <div className="p-5">
                {loading && <p>Loading...</p>}
                {messages &&
                    messages.docs.map((message) => {
                        const data = message.data();
                        return (
                            <ChatMessage
                                userId={data.userId}
                                isSender={data.userId === currentUser?.id}
                                key={message.id}
                            >
                                {data.body}
                            </ChatMessage>
                        );
                    })}
                <form onSubmit={handleSubmit} className="flex space-x-2">
                    <Input
                        type="text"
                        placeholder="Enter your message"
                        onChange={handleChange}
                        value={input}
                    />
                    <Button type="submit">Send</Button>
                </form>
                <Link href={`/messaging`}>Go Back to Messaging</Link>
            </div>
        </>
    );
}
