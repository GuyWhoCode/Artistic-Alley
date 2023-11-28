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

const IMAGE_HOST = "/artistic-alley-uploads/";
const getImageSource = (image: string) => {
    return image.split(IMAGE_HOST)[1];
};

async function createNewCommission(commission: Commission) {
    const cloudinaryImageLink = await uploadCloudinary(commission.image);
    const imageFileName = await getImageSource(cloudinaryImageLink);
    const finalCommissionInfo = {
        ...commission,
        image: imageFileName,
    };

    addDoc(collection(db, "commissions"), finalCommissionInfo);
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
