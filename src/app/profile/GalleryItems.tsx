import React from 'react';
import styles from './Profile.module.css';

interface GalleryItemProps {
    imageUrl: string;
    altText: string;
  }

  const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, altText }) => {
    return (
      <div className={styles.galleryItem}>
        <img src={imageUrl} alt={altText} />
      </div>
    );
  };
  
  export default GalleryItem;  
