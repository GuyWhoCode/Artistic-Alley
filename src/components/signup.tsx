import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";

// TODO:
// Figure out shadcn Checkbox for artist or user
// Consider using React Hook Form

interface LoginProps {
    submitForm: () => void;
}
export default function SignUp({ submitForm }: LoginProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        artist: false,
        user: false,
        bio: null,
    });

    useEffect(() => {
        if (formData.artist === true) {
        }
    }, [formData]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // submitForm();
    };
    const handleChange = (e: React.ChangeEvent) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="p-10 rounded-lg shadow-lg w-96">
                <h1 className="py-5 text-2xl font-bold text-center">
                    Create an Account
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
                        <div>
                            <div className="flex space-x-10 justify-between">
                                <div className="flex space-x-2 items-center">
                                    <Input
                                        name="artist"
                                        type="checkbox"
                                        id="artist-check"
                                        checked={formData.artist}
                                        onChange={handleChange}
                                    />
                                    <Label
                                        htmlFor="artist-check"
                                        className="text-sm text-muted-foreground"
                                    >
                                        Artist
                                    </Label>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <Input
                                        name="user"
                                        type="checkbox"
                                        id="user-check"
                                        checked={formData.user}
                                        onChange={handleChange}
                                    />
                                    <Label
                                        htmlFor="user-check"
                                        className="text-sm text-muted-foreground"
                                    >
                                        User
                                    </Label>
                                </div>
                            </div>
                            {formData.artist ? (
                                <div>
                                    <Label htmlFor="bio">
                                        Artist Biography
                                    </Label>
                                    <Textarea
                                        name="bio"
                                        id="bio"
                                        value={formData.bio ? formData.bio : ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <Button type="submit">
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
