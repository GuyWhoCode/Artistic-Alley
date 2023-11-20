"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { url } from "inspector";
export default function HomepageCommision({
    imgSrc,
    userName,
    price,
    title,
    profilePicture,
    // onClick,
}: {
    imgSrc: string;
    userName: string;
    price: string;
    title: string;
    profilePicture: string;
    // onClick: () => void;
}) {
    const size = 350;
    return (
        <div className="flex flex-col border-2 relative border-black">
            <div className="relative">
                <Image src={imgSrc} alt="test" width={size} height={size}/>
            </div>
            <div className="">
                <Avatar className="absolute bottom-0 left-0 mb-7 w-[50px] h-[50px]">
                    <AvatarImage src={profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="pl-14">{userName}</h2>
                <h1 className="pb-4 pl-12 text-base border-1 border-black pl-10 md:text-xl lg:text-xl">{title}</h1>
            </div>
        </div>
    );
}
