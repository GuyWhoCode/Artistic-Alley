import React from 'react';
import styles from './Profile.module.css'; 

interface ProfileIntroductionProps {
    bio: string;
  }

  const ProfileIntroduction: React.FC<ProfileIntroductionProps> = ({ bio }) => {
    return (
      <div className={styles.profileIntroduction}>
        <p>{bio}</p>
        {/* You can add more information as needed */}
      </div>
    );
  };

  export default ProfileIntroduction;