// pages/profile.tsx
import React from 'react';
import Link from 'next/link';
import ProfileHeader from '../../components/ProfileHeader';
//import styles from './components/Profile.module.css';
import ProfileIntroduction from '../../components/ProfileIntroduction';
import ProfileBackground from '../../components/ProfileBackground';
import Image from 'next/image';
import Gallery from '../../components/Gallery';


// Mock user data
const userData = {
  username: 'artist123',
  bio: 'Talented artist showcasing amazing creations.',
  profilePictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbz8S46qH4I4g7PacDGHeZuKICCu7zk3zlA&usqp=CAU', // Use the online image URL
  // Add other user data as needed
  galleryImages: [
    { imageUrl: 'https://i.pinimg.com/originals/7c/41/50/7c415087a48b26e44acd29d8653ebca9.jpg', altText: 'Description for Image 1' },
    { imageUrl: 'https://i.pinimg.com/originals/7c/41/50/7c415087a48b26e44acd29d8653ebca9.jpg', altText: 'Description for Image 2' },
    { imageUrl: 'https://149868225.v2.pressablecdn.com/wp-content/uploads/2022/12/somunia_somunia_room_drawn_by_rolua__sample-53ac14aed38f86ad3025c4584b259f3d-1.jpeg', altText: 'Description for Image 3' },
    { imageUrl: 'https://i.pinimg.com/736x/68/b3/b4/68b3b454b4d2b08a0f2858bb44cd8a45.jpg', altText: 'Description for Image 4' },
    { imageUrl: 'https://i.pinimg.com/originals/7c/41/50/7c415087a48b26e44acd29d8653ebca9.jpg', altText: 'Description for Image 4' },
    { imageUrl: 'https://i.pinimg.com/736x/68/b3/b4/68b3b454b4d2b08a0f2858bb44cd8a45.jpg', altText: 'Description for Image 5' },
  ]
};

const ProfilePage = () => {
  return (
    <main className="profilePage">
      <ProfileBackground /> {/* Add the ProfileBackground component here */}
      <div className="returnHome">
        <Link href="/">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer text-white text-2xl no-underline border-2 border-white">
        <span>&#8592;</span>
        </div>


        </Link>
      </div>

      <ProfileHeader
        username={userData.username}
        profilePictureUrl={userData.profilePictureUrl}
      />

      <ProfileIntroduction bio={userData.bio} />

      <Gallery images={userData.galleryImages} />

    </main>
  );
};

export default ProfilePage;