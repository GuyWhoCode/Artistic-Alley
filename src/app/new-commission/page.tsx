"use client";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { Commission } from "@/database/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";
import { db } from "@/database/firebase";

const IMAGE_HOST =
    "https://res.cloudinary.com/datgtai6b/image/upload/v1700168828/artistic-alley-uploads/";
const getImageSource = (image: string) => image.split(IMAGE_HOST)[1];

function createNewCommission(commission: Commission) {
    console.log(commission);
    // addDoc(collection(db, "commissions"), commission);
}

export default function Page() {
    const { signedIn, user } = useCurrentUser();
    const router = useRouter();
    function handleSubmission() {
        const newCommission: Commission = {
            userId: user.uid,
            title: "",
            description: "",
            price: 0,
            timesBought: 0,
            reviews: 0,
            categories: [],
            keywords: [],
            image: "",
        };
        createNewCommission(newCommission);
    }

    // https://res.cloudinary.com/datgtai6b/image/upload/v1700168828/artistic-alley-uploads/hom7hm5kjuq5tbpcedhj.jpg

    return signedIn ? (
        <main>
            <h1>Create New Commission</h1>

            <input
                type="text"
                name="title"
                id="title"
                placeholder="Commission Title"
            />
            <br />
            <textarea
                name="description"
                id="description"
                placeholder="Commission Description"
            />
            {/* Upload Image component */}

            <hr />
            <br />
            <label htmlFor="price">$</label>
            <input type="number" name="price" id="price" placeholder="Price" />
            <br />
            <textarea
                name="categories"
                id="categories"
                placeholder="Categories"
            />
            <button onClick={handleSubmission}>Save</button>
        </main>
    ) : (
        <main>
            <Link href="/login">Login</Link>
        </main>
    );
}