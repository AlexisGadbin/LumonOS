export type Reward = {
    id: string;
    name: string;
    image: string;
    isUnlocked: boolean;
    price: number;
  }
  
  export type Message = {
    id: string;
    author: string;
    content: string;
    isRead: boolean;
  }