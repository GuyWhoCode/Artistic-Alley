"use client";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { Commission } from "@/database/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Page() {
    const { signedIn, user } = useCurrentUser();
    const [commissionInfo, setCommissionInfo] = useState<Commission>({
        userId: "",
        title: "",
        description: "",
        price: 0,
        timesBought: 0,
        reviews: 0,
        categories: [],
        keywords: [],
        image: "",
    });

    const router = useRouter();

    // if (!signedIn) {
    //     router.push("/login");
    //     return <></>;
    // }

    return signedIn ? (
        <main>
            <h1>Create New Commission</h1>
        </main>
    ) : (
        <main>
            <Link href="/login">Login</Link>
        </main>
    );
}
