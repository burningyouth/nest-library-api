import { Injectable } from '@nestjs/common';

export interface IBook {
  id: Id;
  title: string;
  description: string;
  authors: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export type CreateBook = Omit<IBook, 'id'>;
export type UpdateBook = Partial<IBook>;

@Injectable()
export class BooksService {
  books: Record<number, IBook> = {};
  getBooks() {
    return Object.values(this.books);
  }
  getBook(id: Id) {
    return this.books[id];
  }
  async createBook(book: CreateBook) {
    const id = Object.keys(this.books).length + 1;
    this.books[id] = { id, ...book };
    return this.books[id];
  }
  updateBook(id: Id, book: Partial<IBook>) {
    this.books[id] = { ...this.books[id], ...book };
    return this.books[id];
  }
  deleteBook(id: Id) {
    delete this.books[id];
  }
}
