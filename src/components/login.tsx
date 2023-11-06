import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginProps {
    submitForm: () => void;
}

export default function Login({ submitForm }: LoginProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm();
    };
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="p-10 rounded-lg shadow-lg w-96">
                <h1 className="py-5 text-2xl font-bold text-center">
                    Sign in to your account
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-3">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 ">
                                <Checkbox id="remember-me" />
                                <Label
                                    htmlFor="remember-me"
                                    className="text-sm text-muted-foreground"
                                >
                                    Remember me?
                                </Label>
                            </div>
                            <Button
                                variant="link"
                                className="text-muted-foreground text-sm font-medium"
                            >
                                Forgot password?
                            </Button>
                        </div>
                        <Button type="submit" className="mb-3">
                            Sign In
                        </Button>
                        <div className="flex justify-between items-baseline">
                            <p className="text-sm text-muted-foreground font-medium leading-none">
                                {"Don't have an account?"}
                            </p>
                            <Button variant="link" className="font-semibold">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

// export default function Login({ loginText, submitForm }: LoginProps) {
//     return (
//         <>
//             <input type="text" placeholder="Email" id="email" required />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//                 required
//             />
//             <button id="submit" onClick={submitForm}>
//                 {loginText}
//             </button>
//         </>
//     );
// }
