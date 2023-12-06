import { Input } from "@/components/ui/input";
import HomepageCommission from "@/components/homepageCommission";
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from "@/components/ui/navItem";
import {
    Home,
    MessageCircle,
    PlusCircle,
    UploadCloud,
    UserCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Commission } from "@/database/types";
import { createImageSource } from "@/lib/image";
import { cache } from "react";

export const revalidate = 0;

const getUserData = cache(async (userId: string) => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("id", "==", userId));
    const querySnapshot = await getDocs(q);
    const userData = querySnapshot.docs[0].data();
    return userData;
});

const FetchCommissions = cache(async () => {
    const allCommissions: Commission[] = [];
    const userPfps: string[] = [];
    const commRef = collection(db, "commissions");
    const docs = await getDocs(commRef);
    for (const doc of docs.docs) {
        const data = doc.data();
        const userInfo = await getUserData(data.userId);
        userPfps.push(userInfo.profilePicture);
        allCommissions.push({
            userId: userInfo.username,
            title: data.title,
            price: data.price,
            image: createImageSource(data.image),
            timesBought: data.timesBought,
            description: data.description,
            categories: data.categories,
            keywords: data.keywords,
            reviews: data.reviews,
        });
    }

    return (
        // for responsiveness and to adjust to different screen sizes
        // mobile screens shows 1 commission in each row by default.
        // tablet (medium) screens shows 2 commissions in each row. 
        // desktop (large) screens show 3 comissions in each row.
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            {allCommissions.map((commission, index) => {
                return (
                    <HomepageCommission
                        key={index}
                        imgSrc={commission.image}
                        userName={commission.userId}
                        price={String(commission.price)}
                        title={commission.title}
                        profilePicture={userPfps[index]}
                        numBought={String(commission.timesBought)}
                    />
                );
            })}
        </div>
    );
});

const MobileNavbar = () => {
    return (
        <NavigationMenu className="bg-[#F46767] p-2 mt-0 fixed max-w-none w-full z-10 bottom-0 md:hidden">
            <NavigationMenuList className="text-slate-50 grid grid-cols-5 items-center">
                <Link
                    href="/"
                    className="flex flex-col items-center justify-center"
                >
                    <Home size={48} />
                    Home
                </Link>
                <Link
                    href="/cloudinary-setup"
                    className="flex flex-col items-center justify-center"
                >
                    <UploadCloud size={48} />
                    Upload Image
                </Link>
                <Link
                    href="/new-commission"
                    className="flex flex-col items-center justify-center"
                >
                    <PlusCircle size={48} />
                </Link>
                <Link
                    href="/messaging"
                    className="flex flex-col items-center justify-center"
                >
                    <MessageCircle size={48} />
                    Messages
                </Link>
                <Link
                    href="/login"
                    className="flex flex-col items-center justify-center"
                >
                    <UserCircle2 size={48} />
                    Account
                </Link>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
const DesktopNavbar = () => {
    return (
        <NavigationMenu className="bg-[#F46767] p-2 mt-0 fixed max-w-none w-full z-10 top-0 justify-center md:flex hidden">
            <NavigationMenuList className="flex gap-5">
                <Link href="/" className="p-2">
                    <Image
                        src="/ArtisticAlleyLogo.png"
                        alt=""
                        priority={true}
                        width="50"
                        height="50"
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>
                <NavItem itemName="Home" path="/" />
                <NavItem itemName="Account" path="/login" />
                <NavItem itemName="Messages" path="/messaging" />
                <NavItem itemName="New Commission" path="/new-commission" />
                <NavItem
                    itemName="Cloudinary Uploader"
                    path="/cloudinary-setup"
                />
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default function Page() {
    const pfpUrlPlaceholder =
        "https://res.cloudinary.com/datgtai6b/image/upload/v1701678406/artistic-alley-uploads/cilixlgm31bhlsk70ncy.jpg";
    return (
        <main>
            <DesktopNavbar />
            <MobileNavbar />
            <div className="flex flex-col items-center justify-center py-[60px] min-w-[320px]">
                <br></br>
                <br></br>
                <h1 className="pb-4 text-5xl font-bold">Discovery page</h1>
                <Input className=" max-w-[480px] mb-3 " placeholder="Search" />
                <FetchCommissions />
            </div>
        </main>
    );
}
