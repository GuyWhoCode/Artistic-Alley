"use client";
import { Input } from "@/components/ui/input";
import HomepageCommission from "@/components/homepageCommission";
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from "@/components/ui/navItem";
import {
    Bookmark,
    Home,
    MessageCircle,
    PlusCircle,
    UserCircle2,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    const pfpUrlPlaceholder =
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=t-kEFO4r0oEAX8dCX0N&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDDGu1dOSs-m8ToepSFqE3SCwGCN2ypyZgHjtUvibf2tQ&oe=6576618E";
    return (
        <main>
            <nav className="bg-[#F46767] p-2 mt-0 fixed w-full z-10 top-0 justify-center md:flex hidden">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavItem itemName="Profile" path="/profile" />
                        <NavItem itemName="Sign Up" path="/signup" />
                        <NavItem itemName="Login" path="/login" />
                        <NavItem itemName="Messaging" path="/messaging" />
                        <NavItem itemName="Chatting" path="/chatting" />
                        <NavItem
                            itemName="New Commission"
                            path="/new-commission"
                        />
                        <NavItem
                            itemName="Cloudinary Setup"
                            path="/cloudinary-setup"
                        />
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            <nav className="bg-[#F46767] p-2 mt-0 fixed w-full z-10 bottom-0 md:hidden flex justify-around">
                <NavigationMenu>
                    <NavigationMenuList className="flex justify-around space-x-4 sm:space-x-12">
                        <Link className="bg-[#F46767] text-slate-50" href="/">
                            <Home size={48} />
                            Home
                        </Link>
                        <Link className="bg-[#F46767] text-slate-50" href="/">
                            <Bookmark size={48} />
                            Saved
                        </Link>
                        <Link
                            className="bg-[#F46767] text-slate-50 justify-center m-0 px-1"
                            href="/new-commission"
                        >
                            <PlusCircle size={48} className="flex justify-self-center"/>
                        </Link>
                        <Link
                            className="bg-[#F46767] text-slate-50"
                            href="/messaging"
                        >
                            <MessageCircle size={48} />
                            Messages
                        </Link>
                        <Link
                            className="bg-[#F46767] text-slate-50"
                            href="/profile"
                        >
                            <UserCircle2 size={48} />
                            Account
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            <div className="flex flex-col items-center justify-center py-[60px] min-w-[320px]">
                <h1 className="pb-4 text-5xl font-bold">Discovery page</h1>
                <Input className=" max-w-[480px] mb-3 " placeholder="Search" />
                <div className="grid grid-cols-2 gap-4 px-2">
                    <HomepageCommission
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="123.45"
                        title="Commission Title"
                        profilePicture={pfpUrlPlaceholder}
                        numBought="50"
                    />
                    <HomepageCommission
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="123.45"
                        title="Commission Title"
                        profilePicture={pfpUrlPlaceholder}
                        numBought="132,000"
                    />
                    <HomepageCommission
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="123.45"
                        title="Commission Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommission
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="123.45"
                        title="Commission Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommission
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="123.45"
                        title="Commission Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                </div>
            </div>
        </main>
    );
}
