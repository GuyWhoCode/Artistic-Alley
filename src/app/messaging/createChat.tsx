"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/database/firebase";
import { Chat } from "@/database/types";
import useUserData from "@/hooks/useUserData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CreateChatroomForm() {
    const [userDoc, loading] = useUserData();
    const [input, setInput] = useState({
        chatName: "",
        userId: "",
        artistId: "",
    } as Chat);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userDoc === undefined) return console.error("User not found");
        const chatroomData: Chat = {
            chatName: input.chatName,
            userId: userDoc.id,
            artistId: input.artistId,
        };
        addDoc(collection(db, "chats"), chatroomData).then((doc) => {
            console.log("Document written with ID: ", doc.id);
        });

        setInput({ ...input, chatName: "", userId: userDoc.id, artistId: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <div className="mb-6">
            <h1 className="py-5 text-2xl font-bold text-center">
                Create a new Chatroom
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex space-x-3 my-5 items-end"
            >
                <div className="">
                    <label htmlFor="chatName">Chatroom Name</label>
                    <Input
                        id="chatName"
                        name="chatName"
                        value={input.chatName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userId">User ID</label>
                    <Input
                        id="userId"
                        name="userId"
                        value={loading ? "" : userDoc?.id}
                        required
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="artistId">Artist ID</label>
                    <Input
                        id="artistId"
                        name="artistId"
                        value={input.artistId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit">Create Chatroom</Button>
            </form>
        </div>
    );
}
