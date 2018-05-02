import {Book} from "./book";
import {Language} from "./language";

export class BookDescription {
  id: number;
  name: string;
  description: string;
  book: Book;
  language: Language;
  pages: number;
}
