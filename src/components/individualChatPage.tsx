import React from 'react';
import Message from './message';
import ChatHeader from './chatHeader';

const individualChatPage = () => {
  const yourProfilePicture = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=t-kEFO4r0oEAX8dCX0N&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDDGu1dOSs-m8ToepSFqE3SCwGCN2ypyZgHjtUvibf2tQ&oe=6576618E';
  const otherUserProfilePicture = 'https://play-lh.googleusercontent.com/SZpyRU_FB9qpQsO8uXRrQcC1RZ-HFvqzmB2aaJ-QdK-PA_Rg-bx90onXgHUcwZpg18k';
  const username = "Fiasco";
  
  return (
    <>
    <div>
      <ChatHeader username={username} />
    </div>
    <div>
      <Message text="Hello, how are you?" isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message text="Good." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message text="Are your comissions open?" isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message text="Yes they are." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message text="What type of art are you looking for?" isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message text="I want a 10x10 cm black and white digital artwork inspired by my pfp. " isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message text="I can do something like that for sure." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message text="I will have your art done within a month. It will cost $25." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message text="Sounds good. Keep me updated." isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message text="Will do." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
    </div>
    </>
    
  );
};

export default individualChatPage;