"use client";
import Link from "next/link";
import "../globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatPreview from "@/components/chatPreview";
import { CreateChatroomForm } from "./createChat";
import {
    useCollection,
    useCollectionData,
} from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
import useUserData from "@/hooks/useUserData";

export default function Page() {
    const { userDoc } = useUserData();
    const [chatrooms] = useCollectionData(
        query(collection(db, "chats"), where("userId", "==", userDoc?.id ?? ""))
    );
    console.log(chatrooms);

    return (
        <main>
            <div className="flex flex-col items-center h-full justify-center pt-[60px] max-h-screen">
                <h1 className="text-3xl font-bold pb-6">Messaging</h1>
                <Link href="/">Return Home</Link>
                <CreateChatroomForm />
                <ScrollArea className="h-[700px] w-[450px] rounded-md border p-4">
                    {chatrooms?.map((chatroom) => (
                        <ChatPreview
                            key={chatroom.id}
                            profilePicture={
                                "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=t-kEFO4r0oEAX8dCX0N&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDDGu1dOSs-m8ToepSFqE3SCwGCN2ypyZgHjtUvibf2tQ&oe=6576618E"
                            }
                            userName={chatroom.chatName}
                            currentCommision={
                                "test"
                            }
                        />
                    ))}
                </ScrollArea>
            </div>
        </main>
    );
}
