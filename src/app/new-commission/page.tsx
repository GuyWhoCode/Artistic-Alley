"use client";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { Commission } from "@/database/types";
import { useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { db } from "@/database/firebase";
import { uploadCloudinary } from "@/components/imageUploadPreview";
import NewCommissionForm, {
    commissionFormData,
} from "@/components/newCommissionForm";

const IMAGE_HOST =
    "https://res.cloudinary.com/datgtai6b/image/upload/v1700168828/artistic-alley-uploads/";
const getImageSource = (image: string) => image.split(IMAGE_HOST)[1];

function createNewCommission(commission: Commission) {
    console.log(commission);
    // addDoc(collection(db, "commissions"), commission);
}

export default function Page() {
    const { signedIn, user } = useCurrentUser();

    function handleSubmission(commissionData: commissionFormData) {
        const updatedCommissionInfo = {
            ...commissionData,
            userId: user.uid,
            timesBought: 0,
            reviews: 0,
            price: parseInt(commissionData.price),
        };
        createNewCommission(updatedCommissionInfo);
    }

    // https://res.cloudinary.com/datgtai6b/image/upload/v1700168828/artistic-alley-uploads/hom7hm5kjuq5tbpcedhj.jpg

    return signedIn ? (
        <main>
            <NewCommissionForm submitForm={handleSubmission} />
        </main>
    ) : (
        <main>
            <Link href="/login">Login</Link>
        </main>
    );
}
