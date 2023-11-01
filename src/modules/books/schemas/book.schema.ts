import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IBook } from '../interfaces/books';
import * as Joi from 'joi';

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

export const bookCreateSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  authors: Joi.string(),
  favorite: Joi.boolean(),
  fileCover: Joi.string(),
  fileName: Joi.string(),
  fileBook: Joi.string()
});

export const bookUpdateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  authors: Joi.string(),
  favorite: Joi.boolean(),
  fileCover: Joi.string(),
  fileName: Joi.string(),
  fileBook: Joi.string()
});

export const BookSchema = SchemaFactory.createForClass(Book);
