import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export interface LoginFormData {
    email: string;
    password: string;
}

interface LoginProps {
    submitForm: (loginData: LoginFormData) => void;
}

export default function Login({ submitForm }: LoginProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm(formData);
    };

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
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
                            <Input
                                name="email"
                                type="email"
                                id="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                value={formData.password}
                                required
                                onChange={handleChange}
                            />
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
                    </div>
                </form>
                <div className="flex justify-between items-baseline">
                    <p className="text-sm text-muted-foreground font-medium leading-none">
                        {"Don't have an account?"}
                    </p>
                    <Button variant="link" className="font-semibold">
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
