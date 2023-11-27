"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";

interface ImagePreviewProps {
    onUploadSuccess: (data: any) => void;
}

export default function ImageUploadPreview({
    onUploadSuccess,
}: ImagePreviewProps) {
    const [imageSrc, setImageSrc] = useState<string | undefined>("");
    const [uploadData, setUploadData] = useState<any>(); // Type is currently set to 'any'. Replace 'any' with the type of your upload data that you want.
    // Currently still works with type=any
    const [uploadSuccess, setUploadSuccess] = useState(false); // State variable to check if an image upload has been successful or not

    // When a file input is changed, this function is called. Such as when a file is selected.
    async function handleOnChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        const file = changeEvent.target.files?.[0];

        if (file) {
            // File reader
            const reader = new FileReader();

            reader.onload = function (onLoadEvent) {
                setImageSrc(onLoadEvent.target?.result as string);
                setUploadData(undefined);
                setUploadSuccess(false); // Reset upload success status when a new file is selected
            };

            reader.readAsDataURL(file);
        }
    }

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
        setUploadSuccess(true); // Set upload success status to true

        onUploadSuccess(data);

        // prints out all the information data (json) about the image onto the console
        // console.log('data', data)

        // only prints out the secure url of the image onto the console
        console.log("Secure URL:", data.secure_url);
    }

    return (
        <>
            <form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleOnSubmit}
            >
                <p>
                    <input type="file" name="file" onChange={handleOnChange} />
                </p>

                {/* Shows a preview after the image is uploaded. with max dimensions. */}
                <img
                    src={imageSrc}
                    style={{ maxWidth: "100%", maxHeight: "400px" }}
                    // alt="Image Preview"
                />

                {/* Submit button */}
                {imageSrc && !uploadData && (
                    <p>
                        <button type="submit">Upload Files</button>
                    </p>
                )}

                {/* Successful Submission */}
                {uploadSuccess && <p>Image successfully uploaded!</p>}

                {/* This prints out all the json object data to the screen */}
                {/* {uploadData && <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>} */}

                {/* This only prints out the secure url to the screen */}
                {uploadData && <p>Secure URL: {uploadData.secure_url}</p>}
            </form>
            <br></br>
        </>
    );
}

