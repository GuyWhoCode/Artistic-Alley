"use client";

import Gallery from "@/components/Gallery";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileIntroduction from "@/components/ProfileIntroduction";
import { Artist } from "@/database/types";
import useUserData from "@/hooks/useUserData";

const GenerateUserProfile = () => {
    const { userDoc } = useUserData();
    if (!userDoc) return null;
    const userInfo: Artist = userDoc?.data() as Artist
    console.log(userInfo)
    // const q = query(collection(db, "cities"), where("capital", "==", true));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
    // Fetch user data from an API
    // return userData;
    return (
        <section>
            <ProfileHeader
                username={userInfo.username}
                profilePictureUrl={userInfo.profilePicture}
            />
            <ProfileIntroduction bio={userInfo.bio} />
            {/* <Gallery images={userData.galleryImages} /> */}
        </section>
    );
};
export default GenerateUserProfile;