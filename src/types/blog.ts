export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  avatar?: string;
}

export interface Post {
  category: string;
  cover: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  description: string;
  tags: string[];
}

export interface PostProps {
  cover: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  index: number;
  onClick: () => void;
}

export interface PostDetailHeaderProps {
  currentPost: Post;
}

export interface PostDescriptionProps {
  currentPost: Post;
}

export interface PostDetailUserDescriptionProps {
  currentUser: User;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface TagProps {
  name: string;
}

export interface PostTagsProps {
  currentPost: Post;
}

export interface RelatedArticleLayoutProps {
  currentPost: Post;
}

export interface RelatedArticleProps {
  cover: string;
  category: string;
  title: string;
  subtitle: string;
}
