export interface User {
  name: string;
  user_id: string;
  user_session_token: string;
  email_id: string;
}

export interface BookResponse {
  books: Book[];
}

export interface Book {
  title: string;
  notes: string[];
}