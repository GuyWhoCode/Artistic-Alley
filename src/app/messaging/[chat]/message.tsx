// used for the individual chatting page
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { User } from "@/database/types";
import useUserData from "@/hooks/useUserData";
import {
    useCollectionData,
    useDocumentData,
} from "react-firebase-hooks/firestore";
import { db } from "@/database/firebase";
import { doc } from "firebase/firestore";

// Replace with the actual user interface when implmentation
interface MessageProps {
    userId: string;
    isSender: boolean;
    images?: string[];
    children?: string;
}

const Message = ({ userId, images, isSender, children }: MessageProps) => {
    const [user] = useDocumentData(doc(db, "users", userId));
    return (
        <div
            className={`flex items-center 
            ${isSender ? "flex-row-reverse" : "flex-row"}`}
        >
            {user && (
                <>
                    <Avatar>
                        <AvatarImage
                            src={user.profilePicture}
                            alt={`User ${user.username}`}
                        />
                        <AvatarFallback>{user.username}</AvatarFallback>
                    </Avatar>
                    <div
                        className={`inline-block p-2 m-1 rounded-md
                ${isSender ? "bg-[#e56c68] mr-2" : "bg-[#ddd] ml-2"}
                `}
                    >
                        {children}
                        {images &&
                            images.map((src, idx) => (
                                <Image
                                    className="my-2"
                                    src={src}
                                    key={`${src}_${idx}`}
                                    alt="Image"
                                    width={200}
                                    height={500}
                                />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Message;
