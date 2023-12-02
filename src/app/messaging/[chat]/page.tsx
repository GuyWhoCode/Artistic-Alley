"use client";
import { db } from "@/database/firebase";
import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import ChatHeader from "@/components/chatHeader";
import { createImageSource } from "@/lib/image";
import ChatMessage from "@/components/message";
import { Message } from "@/database/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMessages } from "@/hooks/useMessages";
import useCurrentUser from "@/hooks/useCurrentUser";

// Replace with actual chat room ID
// and user ID
const chatRoomId = "";
const userID = "";

const chatRoom = collection(db, "chats");

export default function Chat({ params }: { params: { user: string } }) {
    const user1 = {
        username: "Fiasco",
        isMyMessage: true,
        profile: createImageSource(
            "/v1701058704/artistic-alley-uploads/obzu8iutitw6rjzytxao.jpg"
        ),
    };
    // this is the user that is being messaged
    const user2 = {
        username: "Mocha",
        profile: createImageSource(
            "/v1701058862/artistic-alley-uploads/rd7zyg7s2czx91oxoer4.jpg"
        ),
    };

    const [input, setInput] = useState("");
    const currentRoom = doc(chatRoom, chatRoomId);
    const messages = useMessages(currentRoom);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const messageData: Omit<Message, "id"> = {
            userId: userID,
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
            <ChatHeader username={user2.username} />
            <div className="p-5">
                {messages?.map((message) => (
                    <ChatMessage user={user1} key={message.id}>
                        {message.body}
                    </ChatMessage>
                ))}
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
