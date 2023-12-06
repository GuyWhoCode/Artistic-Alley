import { db } from "@/database/firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import useCurrentUser from "./useCurrentUser";

/**
 * Fetches the user data of the current user
 * @param uid The uid of the user to fetch the data of (defaults to the current user)
 * @returns The document of the user
 */
export default function useUserData(uid?: string) {
    const {user} = useCurrentUser();
    if (!uid) uid = user?.uid;
    const [value, loading] = useCollection(
        query(collection(db, "users"), where("id", "==", uid ?? ""))
    ); 

    const userDoc = value?.docs[0];

    return {userDoc, loading};
}
