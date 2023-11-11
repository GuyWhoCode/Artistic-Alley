'use client';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ChatPreview({profilePicture, userName, currentCommision}: {profilePicture: string, userName: string, currentCommision: string}) {
    const redirectToChat = (userName: string) => {
        console.log("userName")
    }
    return (
        <div>
        <div className="flex items-center gap-4 border-b p-4 hover:cursor-pointer hover:bg-muted" onClick={() => {redirectToChat(userName)}}>
            <Avatar className="h-[70px] w-[70px]">
                <AvatarImage src={profilePicture} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="text-lg font-bold">{userName}</h3>
                <p className="text-sm text-muted-foreground">Current Commision: {currentCommision}</p>
            </div>
        </div>
    </div>
    )
}