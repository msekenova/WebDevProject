export interface Book {
  id: number;
  title: string;
  isbn: number;
  page_count: number;
  thumbnailUrl: string;
  description: string;
  isPublished: boolean;
  comment_section: number;
  authors: Author;
  categories: Category;
}
export interface User {
  username: string;
  password: string;
  email: string;
}
export class Author {
  id: number;
  name: string;
  books: Book;
}
export class Category {
  id: number;
  name: string;
  books: Book;
}
export class Comment {
  id: number;
  username: string;
  message: string;
  datePosted: string;
}
export class CommentSection {
  id: number;
  comments: Comment[];
}
export interface AuthToken {
  token: string;
}
