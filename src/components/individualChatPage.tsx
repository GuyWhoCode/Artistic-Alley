// used for the individual chatting page
import React from 'react';
import Message from './message';
import ChatHeader from './chatHeader';

const individualChatPage = () => {
  // these image links are from images stored on cloudinary but any image link also works
  const yourProfilePicture = 'https://res.cloudinary.com/datgtai6b/image/upload/v1701058704/artistic-alley-uploads/obzu8iutitw6rjzytxao.jpg';
  const otherUserProfilePicture = 'https://res.cloudinary.com/datgtai6b/image/upload/v1701058862/artistic-alley-uploads/rd7zyg7s2czx91oxoer4.jpg';
  const username = "Fiasco";
  
  return (
    <>
    <div>
      <ChatHeader username={username} />
    </div>
    <div style={{ padding: '10px' }}>
      <Message content="Hello, how are you?" isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message content="Good." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message content="Are your comissions open?" isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message content="Yes they are." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message content="What type of art are you looking for?" isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message content="I want a 10x10 cm black and white digital Christmas themed artwork inspired by my pfp. " isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message
          content={<img src="https://res.cloudinary.com/datgtai6b/image/upload/v1701058704/artistic-alley-uploads/obzu8iutitw6rjzytxao.jpg" alt="Image" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />}
          isMyMessage={true}
          userProfilePicture={yourProfilePicture}
        />
      <Message content="Make it like a snowman of the dog and put a christmas hat on it." isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message content="I can do something like that for sure." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message content="I will have your art done within a month. It will cost $25." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
      <Message content="Sounds good. Keep me updated." isMyMessage={true} userProfilePicture={yourProfilePicture} />
      <Message content="Will do." isMyMessage={false} userProfilePicture={otherUserProfilePicture} />
    </div>
    </>
    
  );
};

export default individualChatPage;