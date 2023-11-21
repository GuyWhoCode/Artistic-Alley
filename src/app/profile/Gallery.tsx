import React from 'react';
import GalleryItem from './GalleryItems';
import styles from './Profile.module.css';

interface GalleryProps {
    images: Array<{ imageUrl: string; altText: string }>;
  }

  const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <GalleryItem key={index} imageUrl={image.imageUrl} altText={image.altText} />
        ))}
      </div>
    );
  };
  
  export default Gallery;