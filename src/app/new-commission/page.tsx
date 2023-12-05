"use client";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { Commission } from "@/database/types";
import useCurrentUser from "@/hooks/useCurrentUser";
import { db } from "@/database/firebase";
import { uploadCloudinary } from "@/components/imageUploadPreview";
import NewCommissionForm, {
    commissionFormData,
} from "@/components/newCommissionForm";
import { getImageSource } from "@/lib/image";
import { useRouter } from "next/navigation";

async function createNewCommission(commission: Commission): Promise<boolean> {
    try {
        const cloudinaryImageLink = await uploadCloudinary(commission.image);
        const imageFileName = await getImageSource(cloudinaryImageLink);
        const finalCommissionInfo = {
            ...commission,
            image: imageFileName,
        };

        addDoc(collection(db, "commissions"), finalCommissionInfo);
        return true;
    } catch (error) {
        return false;
    }
}

export default function Page() {
    const { signedIn, user } = useCurrentUser();
    const router = useRouter();

    async function handleSubmission(commissionData: commissionFormData) {
        const updatedCommissionInfo = {
            ...commissionData,
            userId: user.uid,
            timesBought: 0,
            reviews: 0,
            price: parseInt(commissionData.price),
        };
        const result = await createNewCommission(updatedCommissionInfo);

        if (result) {
            alert("Commission created");
            router.push("/");
        } else {
            alert("Error creating commission");
        }
    }

    return signedIn ? (
        <main>
            <NewCommissionForm submitForm={handleSubmission} />
            <Link href="/">Return Home</Link>
        </main>
    ) : (
        <main>
            <Link href="/login">Login</Link>
        </main>
    );
}
