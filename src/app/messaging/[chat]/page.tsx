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
import { Message } from "@/database/types";


// Replace with actual chat room ID
// and user ID
const chatRoomId = "";
const userID = "";

const chatRoom = collection(db, "chats");

export default function Chat({ params }: { params: { user: string } }) {
    const currentRoom = doc(chatRoom, chatRoomId);
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesCollection = collection(currentRoom, "messages");
    const q = query(messagesCollection, orderBy("timestamp"));
    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const m = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() } as Message;
            });
            console.log(m);
            setMessages(m);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const message = e.target[0].value as string;
        const messageData: Omit<Message, "id"> = {
            userId: userID,
            body: message,
            timestamp: Date.now(),
            imageId: [],
        };
        addDoc(collection(currentRoom, "messages"), messageData).catch(
            (err) => {
                console.log(err);
            }
        );
    };

    return (
        <div className="flex flex-col items-center h-full justify-center pt-[60px]">
            <p className="text-9xl font-bold">Username: {params.user}</p>
            {messages?.map((message) => (
                <div key={message.id} className="py-2">
                    <p>User ID: {message.userId}</p>
                    <p>Message: {message.body}</p>
                    <p>
                        Timestamp:{" "}
                        {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                    <hr />
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Send</button>
            </form>
            <Link href={`/messaging`}>Go Back to Messaging</Link>
        </div>
    );
}
