export interface User {
  id: string;
  username: string;
  avatarColor: string;
  initials: string;
  avatarUrl?: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  title: string;
  imageUrl: string;
  caption: string;
  hateCount: number;
  comments: Comment[];
  timestamp: string;
}
