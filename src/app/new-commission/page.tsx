import Link from "next/link";
import { firebaseApp } from "@/database/firebase";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Commission } from "@/database/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    const currentUser = auth.currentUser;
    const [commissionInfo, setCommissionInfo] = useState<Commission>({
        userId: "",
        title: "",
        description: "",
        price: 0,
        timesBought: 0,
        reviews: 0,
        categories: [],
        keywords: [],
    });
    const router = useRouter();

    if (!currentUser) {
        router.push("/login");
        return <></>;
    }


    

    return (
        <main>
            <h1>Hello, Profile Page!</h1>

            <Link href="/">Return Home</Link>
        </main>
    );
}
