import Link from "next/link";
import { Input } from "@/components/ui/input";
import HomepageCommision from "@/components/homepageCommision";

export default function Page() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center pt-[60px] max-h-screen">
                <h1 className="pb-4 text-5xl font-bold">Discovery page</h1>
                <Input className=" max-w-[380px] mb-3 " placeholder="Search" />
                <div className="grid grid-cols-2 gap-4">
                    <HomepageCommision imgSrc = "https://picsum.photos/200" userName ="User Name" price="Price $$$" title="Commision Title"/>
                    <HomepageCommision imgSrc = "https://picsum.photos/200" userName ="User Name" price="Price $$$" title="Commision Title"/>
                    <HomepageCommision imgSrc = "https://picsum.photos/200" userName ="User Name" price="Price $$$" title="Commision Title"/>
                    <HomepageCommision imgSrc = "https://picsum.photos/200" userName ="User Name" price="Price $$$" title="Commision Title"/>

                </div>
            </div>
            {/* <Link href="/profile"> Profile </Link>
            <br />
            <Link href="/signup">Sign up</Link>
            <br />
            <Link href="/signin">Sign In</Link>
            <br />
            <Link href="/messaging">Messaging</Link> */}
        </main>
    );
}
