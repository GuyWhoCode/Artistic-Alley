"use client";
import { useState } from "react";
import { collection, addDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/database/firebase";
import { Chat } from "@/database/types";
import useUserData from "@/hooks/useUserData";

export function CreateChatroomForm() {
    const { userDoc } = useUserData("FG3zwzko7Ja03xvaEG2K51EPB882");
    const [input, setInput] = useState({
        chatName: "",
        userId: "",
        artistId: "",
    } as Chat);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userDoc === undefined) return console.error("User not found");
        const chatroomData: Chat = {
            chatName: input.chatName,
            userId: userDoc.id,
            artistId: "",
        };
        addDoc(collection(db, "chats"), chatroomData).then((doc) => {
            // updateDoc(userDoc.ref, {
            //     chats: [...userDoc.data().chats, doc.id],
            // });
            console.log("Document written with ID: ", doc.id);
        });

        setInput({ ...input, chatName: "" });
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="chatroomName">Chatroom Name</label>
            <input
                id="chatroomName"
                value={input.chatName}
                onChange={(e) =>
                    setInput({ ...input, chatName: e.target.value })
                }
                required
            />
            <label htmlFor="userId">User ID</label>
            <input
                id="userId"
                value={input.userId}
                onChange={(e) => setInput({ ...input, userId: e.target.value })}
                required
            />
            <label htmlFor="artistId">Artist ID</label>
            <input
                id="artistId"
                value={input.artistId}
                onChange={(e) =>
                    setInput({ ...input, artistId: e.target.value })
                }
                required
            />
            <button type="submit">Create Chatroom</button>
        </form>
    );
}
