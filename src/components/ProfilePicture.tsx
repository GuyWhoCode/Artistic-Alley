// components/ProfilePicture.tsx

import React from 'react';
import styles from './Profile.module.css';

interface ProfilePictureProps {
  imageUrl: string;
}

const ProfilePicture = ({ imageUrl }: ProfilePictureProps) => (
  <div className={styles.profilePicture}>
    <img src={imageUrl} />
  </div>
);

export default ProfilePicture;
