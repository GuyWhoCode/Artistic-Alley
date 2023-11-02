import { getDatabase } from "firebase/database";
import { firebaseApp } from "@/database/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    UserCredential,
} from "firebase/auth";

export async function POST(request: Request) {
    const { username, email, password } = await request.json();
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("email: ", email);


    // const db = getDatabase(firebaseApp);
    const auth = getAuth(firebaseApp);
    try {
        const createNewUser: UserCredential =
            await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error instanceof Error) {
            return Response.json(
                { message: error.message },
                { status: 400, statusText: "Bad Request" }
            );
        }
    }

    // set(ref(db, "users/" + username), {
    //     username: username,
    //     password: password,
    // });

    return Response.json({ message: "User Successfully Created" });
}
