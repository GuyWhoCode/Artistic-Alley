export type Commission = {
    userId: string;
    title: string;
    description: string;
    price: number;
    timesBought: number;
    reviews: number;
    categories: string[];
    keywords: string[];
    image: string;
};

export type Message = {
    userId: string;
    body: string;
    timestamp: number;
    imageId: string[];
};

export type MessageImageBridge = {
    id: string;
    messageId: string;
    imageId: string;
};

export type Chat = {
    userId: string;
    artistId: string;
    chatName: string;
};

export type ChatMessageBridge = {
    id: string;
    chatId: string;
    messageId: string;
};

export type Image = {
    id: string;
    description: string;
};

export interface User {
    id: string;
    username: string;
    profilePicture: string;
}

export interface Artist extends User {
    bio: string;
    reviews: number;
}