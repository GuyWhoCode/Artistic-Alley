// used for the individual chatting page
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

// Replace with the actual user interface when implmentation
interface basicUser {
    username: string;
    isMyMessage?: boolean;
    profile: string;
}
interface MessageProps {
    user: basicUser;
    images?: string[];
    children?: string;
}

const Message = ({ user, images, children }: MessageProps) => {
    return (
        <div
            className={`flex items-center 
            ${user.isMyMessage ? "flex-row-reverse" : "flex-row"}`}
        >
            <Avatar>
                <AvatarImage src={user.profile} alt={`User ${user.username}`} />
                <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div
                className={`inline-block p-2 m-1 rounded-md
                ${user.isMyMessage ? "bg-[#e56c68] mr-2" : "bg-[#ddd] ml-2"}
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
        </div>
    );
};

export default Message;
