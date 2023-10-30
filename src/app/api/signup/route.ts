import { getDatabase, set, ref } from "firebase/database";
import { initializeFirebase } from "@/database/firebase";

export async function POST(request: Request) {
    const { username, password } = await request.json();
    console.log("username: ", username);
    console.log("password: ", password);

    initializeFirebase();

    const db = getDatabase();

    set(ref(db, "users/" + username), {
        username: username,
        password: password,
    });

    return Response.json({ message: "Hello World" });
}
