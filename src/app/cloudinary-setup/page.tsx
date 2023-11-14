'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import Link from "next/link";

export default function Page() {
  const [imageSrc, setImageSrc] = useState<string | undefined>('');
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
    formData.append('upload_preset', 'artistic-alley-uploads');

    // fetch request
    const data = await fetch('https://api.cloudinary.com/v1_1/datgtai6b/image/upload', {
      method: 'POST',
      body: formData,
    }).then((r) => r.json());

    // prints out information about the image onto the screen
    // the link(url) printed out on the screen is how you can view the uploaded image
    setImageSrc(data.secure_url);
    setUploadData(data);
    setUploadSuccess(true); // Set upload success status to true

    // prints out information about the data onto the console
    // console.log('data', data)
  }

  return (
    <div>
      <Head>
        <title>Cloudinary Image Uploader</title>
        <meta name="description" content="This page is used to upload an image to Cloudinary." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Cloudinary Image Uploader</h1>

        <p>Upload your image online to Cloudinary!</p>

        <form method="post" encType="multipart/form-data" onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" onChange={handleOnChange} />
          </p>

          {/* Shows a preview after the image is uploaded. with max dimensions. */}
          <img src={imageSrc} style={{ maxWidth: '100%', maxHeight: '400px' }}/>
          
          {/* Submit button */}
          {imageSrc && !uploadData && (
            <p>
              <button type="submit">Upload Files</button>
            </p>
          )}

        {/* Successful Submission */}
        {uploadSuccess && (
            <p>Image successfully uploaded!</p>
          )}

          {uploadData && <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>}
        </form>
      </main>
      <br>
      </br>

      {/* Redirect back to home page */}
      <Link href="/">Return Home</Link>
    </div>
  );
}