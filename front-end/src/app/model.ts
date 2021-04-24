export interface Books {
  id: number;
  title: string;
  isbn: number;
  pageCount: number;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
}
export interface User {
  id: number;
  name: string;
  password: string;
  phone: number;
  email: string;
  token: string;
}
