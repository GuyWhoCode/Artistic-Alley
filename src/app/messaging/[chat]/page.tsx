"use client";
import { db } from "@/database/firebase";
import { addDoc, collection, doc, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import ChatMessage from "@/app/messaging/message";
import { Chat, Chat as ChatType, Message, User } from "@/database/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    useCollection,
    useDocument,
    useDocumentData,
} from "react-firebase-hooks/firestore";
import useUserData from "@/hooks/useUserData";
import { UploadCloud } from "lucide-react";
import { Label } from "@/components/ui/label";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Page({ params }: { params: { chat: string } }) {
    const { signedIn } = useCurrentUser();
    if (!signedIn) return <p>Please log in to view this page.</p>;
    return <ChatContent chatId={params.chat} />;
}


const ChatContent = ({ chatId }: { chatId: string }) => {
    const [currentUser, currentUserLoading] = useUserData();

    const [imageForm, setImageForm] = useState<FormData>();
    const [input, setInput] = useState("");

    const currentRoom = doc(collection(db, "chats"), chatId);
    const [currentRoomData] = useDocumentData(currentRoom);
    const [targetUser, targetUserLoading] = useDocument(
        doc(db, "users", currentRoomData?.artistId || "uXkOjOjBO3DbcB5Tqgg0")
    );

    const [messages, loading] = useCollection(
        query(collection(currentRoom, "messages"), orderBy("timestamp"))
    );
    const [submittingMessage, setSubmittingMessage] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentUser?.id === undefined)
            return console.error("User not found");
        if (input === "" || submittingMessage) return;

        setInput("");
        setSubmittingMessage(true);
        if (imageForm === undefined) {
            const messageData: Omit<Message, "id"> = {
                userId: currentUser.id,
                body: input,
                timestamp: Date.now(),
                imageId: [],
            };

            addDoc(collection(currentRoom, "messages"), messageData).catch(
                (err) => {
                    console.log(err);
                }
            );
            setSubmittingMessage(false);
        } else {
            fetch("https://api.cloudinary.com/v1_1/datgtai6b/image/upload", {
                method: "POST",
                body: imageForm,
            })
                .then((r) => r.json())
                .then((data) => {
                    e.preventDefault();
                    if (currentUser?.id === undefined)
                        return console.error("User not found");
                    if (input === "" || submittingMessage) return;

                    setSubmittingMessage(true);
                    if (imageForm === undefined) {
                        const messageData: Omit<Message, "id"> = {
                            userId: currentUser.id,
                            body: input,
                            timestamp: Date.now(),
                            imageId: [],
                        };

                        addDoc(
                            collection(currentRoom, "messages"),
                            messageData
                        ).catch((err) => {
                            console.log(err);
                        });
                        setSubmittingMessage(false);
                    } else {
                        fetch(
                            "https://api.cloudinary.com/v1_1/datgtai6b/image/upload",
                            {
                                method: "POST",
                                body: imageForm,
                            }
                        )
                            .then((r) => r.json())
                            .then((data) => {
                                const messageData: Omit<Message, "id"> = {
                                    userId: currentUser.id,
                                    body: input,
                                    timestamp: Date.now(),
                                    imageId: [data.secure_url],
                                };

                                addDoc(
                                    collection(currentRoom, "messages"),
                                    messageData
                                ).catch((err) => {
                                    console.log(err);
                                });
                                setSubmittingMessage(false);
                                setImageForm(undefined);
                            });
                    }
                    setInput("");
                    setImageForm(undefined);
                });
        }
    };
    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const formData = new FormData();
        formData.append("file", e.target.files?.[0] as Blob);
        formData.append("upload_preset", "artistic-alley-uploads");
        setImageForm(formData);
    };

    if (currentUserLoading || targetUserLoading || loading) return <p>Loading...</p>;

    return (
        <>
            <div className="p-5">
                {messages &&
                    messages.docs.map((message) => {
                       const data = message.data() as Message;

                        const userData =
                            data.userId === targetUser!.data()?.id
                                ? (targetUser!.data() as User)
                                : (currentUser!.data() as User);

                        return (
                            <ChatMessage
                                userData={userData}
                                isSender={data.userId === currentUser?.id}
                                images={data.imageId}
                                key={message.id}
                            >
                                {data.body}
                            </ChatMessage>
                        );
                    })}
                <form onSubmit={handleSubmit} className="flex space-x-2">
                    <Input
                        type="text"
                        placeholder={
                            submittingMessage
                                ? "Sending..."
                                : "Enter your message"
                        }
                        onChange={handleChange}
                        value={input}
                        disabled={submittingMessage}
                    />
                    <Button asChild>
                        <Label className="w-50" htmlFor="imageUpload">
                            <UploadCloud />
                            <Input
                                name="imageUpload"
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </Label>
                    </Button>
                    <Button type="submit">Send</Button>
                </form>
                <Link href={`/messaging`}>Go Back to Messaging</Link>
            </div>
        </>
    );
};
