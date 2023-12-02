import { useState, useEffect } from "react";
import {
    doc,
    collection,
    query,
    orderBy,
    onSnapshot,
    DocumentReference,
} from "firebase/firestore";
import { Message } from "@/database/types";

/**
 * Fetches all messages from a chat room
 * @param chatRoom The DocumentReference of the chat room
 * @returns An array of messages
 */
export const useMessages = (chatRoom: DocumentReference) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const messagesCollection = collection(chatRoom, "messages");
        const q = query(messagesCollection, orderBy("timestamp"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const m = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() } as Message;
            });
            setMessages(m);
        });

        return () => {
            unsubscribe();
        };
    }, [chatRoom]);

    return messages;
};
