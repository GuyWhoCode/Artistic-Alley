// used for the individual chatting page
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
    content: string | React.ReactNode; // accepts either text or images (sent as a link. such as using uploaded image links from cloudinary) as a message
    isMyMessage: boolean; // to determine whether the message is from me or if its from the other user
    userProfilePicture: string; // URL of the user's profile picture
}

const Message = ({
    content,
    isMyMessage,
    userProfilePicture,
}: MessageProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMyMessage ? "flex-end" : "flex-start",
            }}
        >
            {!isMyMessage && (
                <Avatar>
                    <AvatarImage src={userProfilePicture} alt="Other User" />
                </Avatar>
            )}
            <div
                style={{
                    display: "inline-block",
                    padding: "8px",
                    background: isMyMessage ? "#e56c68" : "#ddd",
                    borderRadius: "8px",
                    marginLeft: isMyMessage ? "0" : "4px",
                    marginRight: isMyMessage ? "4px" : "0",
                }}
            >
                {/* Content: The actual message whether its text or an image link to the image*/}
                {content}
            </div>
            {isMyMessage && (
                <Avatar>
                    <AvatarImage src={userProfilePicture} alt="Your Profile" />
                </Avatar>
            )}
        </div>
    );
};

export default Message;
