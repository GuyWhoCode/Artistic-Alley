interface LoginProps {
    loginText: string;
    submitForm: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Login({ loginText, submitForm }: LoginProps) {
    return (
        <>
            <input type="text" placeholder="Username" id="username" required />
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
