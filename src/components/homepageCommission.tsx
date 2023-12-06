"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
export default function HomepageCommission({
    imgSrc,
    userName,
    price,
    title,
    profilePicture,
    numBought = "0",
}: {
    imgSrc: string;
    userName: string;
    price: string;
    title: string;
    profilePicture: string;
    numBought?: string;
}) {
    const router = useRouter();
    const redirectToChat = (e: any, userName: string) => {
        e.preventDefault();
        router.push(`/messaging/${userName}`);
    };
    const size = 350;
    return (
        <div
            className=" flex flex-col border-2 relative border-black hover:cursor-pointer hover:bg-muted"
            onClick={(e) => redirectToChat(e, userName)}
        >
            <div className="relative overflow-hidden w-[350px] h-[350px]">
                <Image style={{ objectFit: "cover" }} src={imgSrc} alt="test" width={size} height={size} />
            </div>
            <div className="pb-0">
                <Avatar className=" absolute bottom-0 left-0 mb-14 w-[50px] h-[50px]">
                    <AvatarImage src={profilePicture} />
                    <AvatarFallback>DN</AvatarFallback>
                </Avatar>
                <h2 className="pl-14">{userName}</h2>
                <h1 className=" pl-14 text-base border-1 border-black md:text-xl">
                    {title}
                </h1>
                <div className="flow-root">
                    <p className="float-left pl-2 text-base md:text-xl text-orange-400">
                        ${price}
                    </p>
                    <p className="float-right pr-2 text-base md:text-xl lg:text-lg text-slate-400">
                        {numBought} bought
                    </p>
                </div>
            </div>
        </div>
    );
}
