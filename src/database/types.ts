export type Commission = {
    id: string;
    userId: string;
    title: string;
    description: string;
    price: number;
    timesBought: number;
    reviews: number;
    categories: string[];
    keywords: string[];
};

export type CommissionImageBridge = {
    id: string;
    commissionId: string;
    imageId: string;
};

export type Message = {
    id: string;
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
    id: string;
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
    email: string;
    password: string;
    profilePicture: string;
}

export interface Artist extends User {
    bio: string;
    reviews: number;
}

export interface UserFormData {
    email: string,
    password: string,
    artist: boolean,
    user: boolean,
    bio: string,
}