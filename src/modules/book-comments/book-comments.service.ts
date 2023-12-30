import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { BookComment } from './schemas/book-comments.schema';
import { Model } from 'mongoose';
import { CreateBookCommentDto } from './interfaces/books-comments';

@Injectable()
export class BookCommentsService {
  constructor(
    @InjectModel(BookComment.name) private model: Model<BookComment>
  ) {}

  findAllBookComment(bookId: Id): Promise<BookComment[]> {
    return this.model.find({ bookId }).exec();
  }

  async create(comment: CreateBookCommentDto): Promise<BookComment> {
    const createdComment = new this.model(comment);
    return createdComment.save();
  }

  async findAll(): Promise<BookComment[]> {
    return this.model.find().exec();
  }

  async findOne(id: Id): Promise<BookComment> {
    return this.model.findById(id).exec();
  }

  async update(id: Id, comment: BookComment): Promise<BookComment> {
    return this.model.findByIdAndUpdate(id, comment, { new: true }).exec();
  }

  async remove(id: Id): Promise<BookComment> {
    return this.model.findByIdAndRemove(id).exec();
  }
}
