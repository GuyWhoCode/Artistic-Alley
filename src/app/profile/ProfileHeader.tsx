// components/ProfileHeader.tsx
import ProfilePicture from './ProfilePicture'; 
import React from 'react';
import styles from './Profile.module.css'; 


interface ProfileHeaderProps {
  username: string;
  profilePictureUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, profilePictureUrl }) => {
  return (
    <div className={styles.profileHeader}>
      <ProfilePicture imageUrl={profilePictureUrl} altText={`${username}'s profile`} />
        <div className = {styles.usernameContainer}>
          <h2>{username}</h2>
      </div>
    </div>
  );
};

export default ProfileHeader;
