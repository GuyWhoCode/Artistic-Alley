"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import ImageUploadPreview from "@/components/imageUploadPreview"; // to import the imageUploadPreview component

export default function Page() {
    const handleUploadSuccess = (data: any) => {
        // handle successful upload
        console.log("Image uploaded successfully!");
    };

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
                <ImageUploadPreview onUploadSuccess={handleUploadSuccess} />
            </main>
            <br></br>

            {/* Redirect back to home page */}
            <Link href="/">Return Home</Link>
        </div>
    );
}
