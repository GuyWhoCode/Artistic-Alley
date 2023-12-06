"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { useRouter } from "next/navigation";

export default function ChatPreview({
    profilePicture,
    userName,
    chatId,
    currentCommision,
}: {
    profilePicture: string;
    userName: string;
    chatId: string;
    currentCommision: string;
}) {
    const router = useRouter();
    const redirectToChat = (e : any, Title : string) => {
        e.preventDefault()
        router.push(`/messaging/${chatId}`);
    };
    return (
        <div>
            <div
                className="flex items-center gap-4 border-b p-4 hover:cursor-pointer hover:bg-muted"
                onClick={(e) => {
                    redirectToChat(e, chatId);
                }}
            >
                <Avatar className="h-[70px] w-[70px]">
                    <AvatarImage src={profilePicture} />
                   {/* Default avatar pfp if a user does not have one. */}
                   <AvatarFallback>
                    <img src="https://res.cloudinary.com/datgtai6b/image/upload/v1701678406/artistic-alley-uploads/cilixlgm31bhlsk70ncy.jpg" alt="Fallback Avatar" />
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-lg font-bold">{userName}</h3>
                    <p className="text-sm text-muted-foreground">
                        Current Commision: {currentCommision}
                    </p>
                </div>
            </div>
        </div>
    );
}
