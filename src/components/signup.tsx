import React from "react";
interface LoginProps {
    loginText: string;
    submitForm: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Login({ loginText, submitForm }: LoginProps) {
    return (
        <>
            <input type="text" placeholder="Email" id="email" required />
            <input
                type="password"
                placeholder="Password"
                id="password"
                required
            />
            <button id="submit" onClick={submitForm}>
                {loginText}
            </button>
        </>
    );
}