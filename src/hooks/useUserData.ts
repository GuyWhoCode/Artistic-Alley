import { db, auth } from "@/database/firebase";
import { DocumentSnapshot, collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import useCurrentUser from "./useCurrentUser";

/**
 * Fetches the user data of the current user
 * @param uid The uid of the user to fetch the data of (defaults to the current user)
 * @returns The document snapshot of the user data and a boolean indicating whether the data is still loading
 */
export default function useUserData(uid?: string): [DocumentSnapshot | undefined, boolean] {
    const {user} = useCurrentUser();
    if (!uid) uid = user?.uid;
    const [value, loading] = useCollection(
        query(collection(db, "users"), where("id", "==", uid ?? ""))
    ); 
    const userDoc = value?.docs[0];

    return [userDoc, loading];
}
