import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { url } from "inspector";
export default function HomepageCommision({
    imgSrc,
    userName,
    price,
    title,
    profilePicture,
}: {
    imgSrc: string;
    userName: string;
    price: string;
    title: string;
    profilePicture: string;
}) {
    const size = 350;
    return (
        <div className="flex flex-col border-2 relative border-black">
            <div className="relative">
                <Image src={imgSrc} alt="test" width={size} height={size}/>
            </div>
            <div className="">
                <Avatar className="absolute bottom-0 left-0 mb-7">
                    <AvatarImage src={profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="pb-4 text-base border-1 border-black pl-10 md:text-xl lg:text-xl">{title}</h1>
            </div>
        </div>
    );
}
