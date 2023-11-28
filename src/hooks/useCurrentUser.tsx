import { auth } from "@/database/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
export interface CurrentUser {
    signedIn: boolean;
    user: User;
}

export default function useCurrentUser(): CurrentUser {
    const [signedIn, changeLoginStatus] = useState(false);
    const [user, setUser] = useState({} as User);
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                changeLoginStatus(true);
                setUser(user);
                // User is signed in
            } else {
                changeLoginStatus(false);
                setUser({} as User);
                // User is signed out
            }
        });
        return () => {
            listener();
        };
    }, []);
    return { signedIn, user };
}
