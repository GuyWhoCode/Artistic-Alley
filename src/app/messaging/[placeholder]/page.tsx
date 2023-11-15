import Link from "next/link";

export default function Placeholder({params}: {params: {placeholder: string}}) {
    return (
        <div className="flex flex-col items-center h-full justify-center pt-[60px]">
            <p className="text-9xl font-bold">Username: {params.placeholder}</p>
            <Link href={`/messaging`}>Go Back to Messaging</Link>
        </div>
    );
}