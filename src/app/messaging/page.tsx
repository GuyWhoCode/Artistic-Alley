import Link from "next/link";
import "../globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
    return (
        <main>
            <div className="flex h-full justify-center pt-[100px]">
                <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4"></ScrollArea>
                
            </div>
            <Link href="/">Return Home</Link>
            {/* 
            TODO:
            We need to build just the front end of the messaging page
            I think we're going to need components for the messaging boxes and we need to figure out how to change chats when u click
            Firstly if we just design the general layout that would be great
            */}
        </main>
    );
}
