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
}: // onClick,
{
    imgSrc: string;
    userName: string;
    price: string;
    title: string;
    profilePicture: string;
    // onClick: () => void;
}) {
    const router = useRouter();
    const redirectToChat = (e: any, userName: string) => {
        e.preventDefault();
        router.push(`/messaging/${userName}`);
    };
    const size = 350;
    return (
        <div className=" flex flex-col border-2 relative border-black hover:cursor-pointer hover:bg-muted" onClick={(e) => redirectToChat(e, userName)}>
            <div className="relative">
                <Image src={imgSrc} alt="test" width={size} height={size} />
            </div>
            <div className="pb-0">
                <Avatar className=" absolute bottom-0 left-0 mb-14 w-[50px] h-[50px]">
                    <AvatarImage src={profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="pl-14">{userName}</h2>
                <h1 className=" pl-14 text-base border-1 border-black pl-10 md:text-xl lg:text-xl">
                    {title}
                </h1>
                <p className="ml-[55%] md:ml-[65%] lg:ml-[75%] text-base md:text-xl lg:text-xl text-orange-400">
                    ${price}
                </p>
            </div>
        </div>
    );
}
