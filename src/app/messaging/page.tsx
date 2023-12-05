// this is the chatting home page. as well as the chatting functionality page.
// it shows how real time chatting would look like
"use client";
import Link from "next/link";
import "../globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatPreview from "@/app/messaging/chatPreview";
import { CreateChatroomForm } from "./createChat";
import {
    useCollection,
    useCollectionData,
    useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { collection, doc, or, orderBy, query, where } from "firebase/firestore";
import { db } from "@/database/firebase";
import useUserData from "@/hooks/useUserData";

export default function Page() {
    const { userDoc } = useUserData();
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
                <h1 className="text-3xl font-bold pb-6">Messaging</h1>
                <Link href="/chatting">Check out full example chatting page.</Link>
                <br></br>
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
                                        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=t-kEFO4r0oEAX8dCX0N&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDDGu1dOSs-m8ToepSFqE3SCwGCN2ypyZgHjtUvibf2tQ&oe=6576618E"
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
