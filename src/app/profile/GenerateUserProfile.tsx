"use client";

import Gallery from "@/components/Gallery";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileIntroduction from "@/components/ProfileIntroduction";
import { db } from "@/database/firebase";
import { Artist, Commission } from "@/database/types";
import useCurrentUser from "@/hooks/useCurrentUser";
import { query, collection, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const fetchUser = async (userID: string): Promise<Artist> => {
    if (!userID) return {} as Artist;

    const fetchFirebase = query(
        collection(db, "users"),
        where("id", "==", userID)
    );
    const queryResult = await getDocs(fetchFirebase);
    return queryResult.docs[0].data() as Artist;
};

const fetchImages = async (userID: string) => {
    const fetchFirebase = query(
        collection(db, "commissions"),
        where("userId", "==", userID)
    );
    const queryResult = await getDocs(fetchFirebase);
    return queryResult;
};

const GenerateUserProfile = () => {
    const { user } = useCurrentUser();
    const [userImages, setUserImages] = useState([] as Commission[]);
    const [userInfo, setUserInfo] = useState({} as Artist);
    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await fetchUser(user.uid);
            setUserInfo(userInfo);
        };
        fetchUserInfo();

        const fetchUserImages = async () => {
            if (!user.uid) return;
            const images = await fetchImages(user.uid);
            if (!images) return;
            setUserImages(images.docs.map((doc) => doc.data() as Commission));
        };
        fetchUserImages();
    }, [user.uid]);

    return (
        <section>
            <ProfileHeader
                username={userInfo.username}
                profilePictureUrl={userInfo.profilePicture}
            />
            <ProfileIntroduction bio={userInfo.bio} />
            <Gallery images={userImages} />
        </section>
    );
};
export default GenerateUserProfile;
