"use client";
import { useState, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import ImageUploadPreview from "@/components/imageUploadPreview"; // to import the imageUploadPreview component

export default function Page() {
    const [imageSrc, setImageSrc] = useState<string>("");
    const [uploadData, setUploadData] = useState<any>(); // Type is currently set to 'any'. Replace 'any' with the type of your upload data that you want.
    // Currently still works with type=any

    // When the form is submitted, this function is called and uploads the image online to cloudinary.
    async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        //presets go here. The 2nd parameter is the folder the image is uploaded to.
        formData.append("upload_preset", "artistic-alley-uploads");

        // fetch request
        const data = await fetch(
            "https://api.cloudinary.com/v1_1/datgtai6b/image/upload",
            {
                method: "POST",
                body: formData,
            }
        ).then((r) => r.json());

        // prints out all the information data (json) about the image onto the screen
        // the link(url) printed out on the screen is how you can view the uploaded image
        setImageSrc(data.secure_url);
        setUploadData(data);

        // only prints out the secure url of the image onto the console
        console.log("Secure URL:", data.secure_url);
    }

    return (
        <div>
            <Head>
                <title>Cloudinary Image Uploader</title>
                <meta
                    name="description"
                    content="This page is used to upload an image to Cloudinary."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Cloudinary Image Uploader</h1>

                <p>Upload your image online to Cloudinary!</p>
                <form
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleOnSubmit}
                >
                    <ImageUploadPreview
                        imageSrc={imageSrc}
                        setImageSrc={setImageSrc}
                    />

                    {/* Submit button */}
                    {imageSrc && (
                        <p>
                            <button type="submit">Upload Files</button>
                        </p>
                    )}
                </form>
            </main>
            <br></br>

            {/* Redirect back to home page */}
            <Link href="/">Return Home</Link>
        </div>
    );
}
