import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MessageProps {
  text: string;
  isMyMessage: boolean;
  userProfilePicture: string; // URL of the user's profile picture
}

const Message: React.FC<MessageProps> = ({ text, isMyMessage, userProfilePicture }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMyMessage ? 'flex-end' : 'flex-start' }}>
      {!isMyMessage && <Avatar><AvatarImage src={userProfilePicture} alt="Other User" /></Avatar>}
      <div
        style={{
          display: 'inline-block',
          padding: '8px',
          background: isMyMessage ? '#e56c68' : '#ddd',
          borderRadius: '8px',
          marginLeft: isMyMessage ? '0' : '4px',
          marginRight: isMyMessage ? '4px' : '0',
        }}
      >
        {text}
      </div>
      {isMyMessage && <Avatar><AvatarImage src={userProfilePicture} alt="Your Profile" /></Avatar>}
    </div>
  );
};

export default Message;