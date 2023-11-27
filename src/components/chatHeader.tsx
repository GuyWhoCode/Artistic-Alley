// used for the individual chatting page
import React from 'react';

// Takes username as a prop and renders it at the top of the individual chat page
interface ChatHeaderProps {
    username: string;
}

const ChatHeader = ({ username }: ChatHeaderProps) => {
    return (
        <div style={{ textAlign: 'center', padding: '10px', background: 'white', color: 'black'}}>
            {'Other Users Username: ' + username}
        </div>
    );
};

export default ChatHeader;