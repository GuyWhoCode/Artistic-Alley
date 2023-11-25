// components/ProfilePicture.tsx

import React from 'react';
import styles from './Profile.module.css';

interface ProfilePictureProps {
  imageUrl: string;
  altText: string;
}

const ProfilePicture = ({ imageUrl, altText }: ProfilePictureProps) => (
  <div className={styles.profilePicture}>
    <img src={imageUrl} alt={altText} />
  </div>
);

export default ProfilePicture;
