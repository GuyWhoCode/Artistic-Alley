"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import HomepageCommision from "@/components/homepageCommision";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Page() {
    const pfpUrlPlaceholder =
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=t-kEFO4r0oEAX8dCX0N&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDDGu1dOSs-m8ToepSFqE3SCwGCN2ypyZgHjtUvibf2tQ&oe=6576618E";
    return (
        <main>
            <div className="flex flex-col items-center justify-center py-[60px] min-w-[320px]">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/profile" legacyBehavior passHref>
                                <NavigationMenuLink>Profile</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/signup" legacyBehavior passHref>
                                <NavigationMenuLink>Sign Up</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <Link href="/login" legacyBehavior passHref>
                            <NavigationMenuLink>Login</NavigationMenuLink>
                        </Link>
                        <Link href="/messaging" legacyBehavior passHref>
                            <NavigationMenuLink>Messaging</NavigationMenuLink>
                        </Link>
                        <Link href="/chatting" legacyBehavior passHref>
                            <NavigationMenuLink>Chatting</NavigationMenuLink>
                        </Link>
                        <Link href="/cloudinary-setup" legacyBehavior passHref>
                            <NavigationMenuLink>
                                Cloudinary Setup
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <h1 className="pb-4 text-5xl font-bold">Discovery page</h1>
                <Input className=" max-w-[480px] mb-3 " placeholder="Search" />
                <div className="grid grid-cols-2 gap-4 px-2">
                    <HomepageCommision
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="Price $$$"
                        title="Commision Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommision
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="Price $$$"
                        title="Commision Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommision
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="Price $$$"
                        title="Commision Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommision
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="Price $$$"
                        title="Commision Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                    <HomepageCommision
                        imgSrc="https://picsum.photos/200"
                        userName="User Name"
                        price="Price $$$"
                        title="Commision Title"
                        profilePicture={pfpUrlPlaceholder}
                    />
                </div>
            </div>
        </main>
    );
}
