// components/ProfilePicture.tsx

import React from 'react';
import styles from './Profile.module.css';

interface ProfilePictureProps {
  imageUrl: string;
  altText: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, altText }) => {
  return (
    <div className={styles.profilePicture}>
      <img src={imageUrl} />
    </div>
  );
};

export default ProfilePicture;
