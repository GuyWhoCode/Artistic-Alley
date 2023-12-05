"use client";
import { ChangeEvent } from "react";
interface ImageUploadPreviewProps {
    setImageSrc: (imageSrc: string) => void;
    imageSrc: string;
}

// When the form is submitted, this function is called and uploads the image online to cloudinary.
export async function uploadCloudinary(imageLink: string): Promise<string> {
    // Cloudinary utilizes Form data to upload images through REST API.
    const formData = new FormData();
    formData.append("file", imageLink);

    //presets go here. The 2nd parameter is the folder the image is uploaded to.
    formData.append("upload_preset", "artistic-alley-uploads");

    // fetch request
    const data = await fetch(
        "https://api.cloudinary.com/v1_1/datgtai6b/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );
    const response = await data.json();

    // only returns secure url of the image onto the console
    return response.secure_url;
}

export default function ImageUploadPreview({
    setImageSrc,
    imageSrc,
}: ImageUploadPreviewProps) {
    // Type is currently set to 'any'. Replace 'any' with the type of your upload data that you want.
    // Currently still works with type=any

    // When a file input is changed, this function is called. Such as when a file is selected.
    async function handleOnChange(changeEvent: ChangeEvent<HTMLInputElement>) {
        const file = changeEvent.target.files?.[0];

        if (file) {
            // File reader
            const reader = new FileReader();

            reader.onload = function (onLoadEvent) {
                setImageSrc(onLoadEvent.target?.result as string);
            };

            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <p>
                <input type="file" name="file" onChange={handleOnChange} />
            </p>

            {/* Shows a preview after the image is uploaded. with max dimensions. */}
            <img
                src={imageSrc}
                style={{ maxWidth: "100%", maxHeight: "400px" }}
                // alt="Image Preview"
            />
        </>
    );
}
