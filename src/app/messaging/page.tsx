// this is the chatting home page. as well as the chatting functionality page.
// it shows how real time chatting would look like
"use client";
import Link from "next/link";
import "../globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatPreview from "@/app/messaging/chatPreview";
import { CreateChatroomForm } from "./createChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, or, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
import useUserData from "@/hooks/useUserData";

export default function Page() {
    const [userDoc] = useUserData();
    const [chatrooms, loading] = useCollection(
        query(
            collection(db, "chats"),
            or(
                where("userId", "==", userDoc?.id ?? ""),
                where("artistId", "==", userDoc?.id ?? "")
            )
        )
    );
    return (
        <main>
            <div className="flex flex-col items-center h-full justify-center pt-[60px] max-h-screen">
                <h1 className="text-3xl font-bold mb-2">Messaging</h1>
                <CreateChatroomForm />
                <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
                    {loading && <p>Loading...</p>}
                    {chatrooms &&
                        chatrooms.docs.map((chatroom) => {
                            const data = chatroom.data();
                            return (
                                <ChatPreview
                                    key={chatroom.id}
                                    chatId={chatroom.id}
                                    profilePicture={
                                        "https://res.cloudinary.com/datgtai6b/image/upload/v1701678406/artistic-alley-uploads/cilixlgm31bhlsk70ncy.jpg"
                                    }
                                    userName={data.chatName}
                                    currentCommision={"test"}
                                />
                            );
                        })}
                </ScrollArea>
            </div>
            <Link href="/">Return Home</Link>
        </main>
    );
}
