// used for the individual chatting page
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "@/database/firebase";
import { doc } from "firebase/firestore";
import { User } from "@/database/types";

// Replace with the actual user interface when implmentation
interface MessageProps {
    userData: User;
    isSender: boolean;
    images?: string[];
    children?: string;
}

const Message = ({ userData, images, isSender, children }: MessageProps) => {
    return (
        <div
            className={`flex items-center 
            ${isSender ? "flex-row-reverse" : "flex-row"}`}
        >
            {userData && (
                <>
                    <Avatar>
                        <AvatarImage
                            src={userData.profilePicture}
                            alt={`User ${userData.username}`}
                        />
                        <AvatarFallback>{userData.username}</AvatarFallback>
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
