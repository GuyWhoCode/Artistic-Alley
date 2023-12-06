const IMAGE_HOST = "https://res.cloudinary.com/datgtai6b/image/upload";
/**
 * Fragments the full Image URL from Cloudinary to store on Firebase
 * @param image Full Image URL from Cloudinary
 * @returns Fragmented Image URL stored on Firebase
 */
export const getImageSource = (image: string): string => {
    return image.split(IMAGE_HOST)[1];
};

/**
 * Generates a complete image URL from the fragmented image URL stored on Firebase
 * @param imageURL Image URL Stored on Firebase
 * @returns Complete Image URL
 */
export const createImageSource = (imageURL: string): string => {
    return IMAGE_HOST + imageURL;
}
