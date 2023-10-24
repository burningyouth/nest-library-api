import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IBook } from '../interfaces/books';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements IBook {
  @Prop({
    required: true
  })
  title: string;
  @Prop()
  description: string;
  @Prop()
  authors: string;
  @Prop()
  favorite: string;
  @Prop()
  fileCover: string;
  @Prop()
  fileName: string;
  @Prop()
  fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
