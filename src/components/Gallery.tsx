import React from 'react';
import GalleryItem from './GalleryItems';
import styles from './Profile.module.css';

interface GalleryProps {
  images: Array<{ imageUrl: string; altText: string }>;
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <GalleryItem key={index} imageUrl={image.imageUrl} altText={image.altText} />
      ))}
    </div>
  );
};


export default Gallery;