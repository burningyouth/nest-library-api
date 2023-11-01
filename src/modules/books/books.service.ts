import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto, UpdateBookDto } from './interfaces/books';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  getBooks() {
    return this.bookModel.find().exec();
  }
  getBook(id: Id) {
    return this.bookModel.findById(id).exec();
  }

  createBook(book: CreateBookDto) {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }
  updateBook(id: Id, book: UpdateBookDto) {
    return this.bookModel.findByIdAndUpdate(id, book);
  }
  deleteBook(id: Id) {
    return this.bookModel.findByIdAndRemove(id);
  }
}
