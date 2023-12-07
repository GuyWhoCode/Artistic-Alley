import React from "react";
import GalleryItem from "./GalleryItems";
import styles from "./Profile.module.css";
import { Commission } from "@/database/types";
import { createImageSource } from "@/lib/image";

interface GalleryProps {
    images: Commission[];
}

const Gallery = ({ images }: GalleryProps) => {
    return (
        <div className={styles.gallery}>
            {images.map((image: Commission, index: number) => (
                <GalleryItem
                    key={index}
                    imageUrl={createImageSource(image.image)}
                    altText={"commission"}
                />
            ))}
        </div>
    );
};

export default Gallery;
