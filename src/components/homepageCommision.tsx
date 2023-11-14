import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { url } from "inspector";
export default function HomepageCommision({
    imgSrc,
    userName,
    price,
    title,
}: {
    imgSrc: string;
    userName: string;
    price: string;
    title: string;
}) {
    const size = 180;
    return (
        <div>
            <Image src={imgSrc} alt="test" width={size} height={size} />
        </div>
    );
}
