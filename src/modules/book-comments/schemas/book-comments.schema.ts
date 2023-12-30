import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookCommentDocument = BookComment & Document;

@Schema()
export class BookComment {
  @Prop({ type: Number, required: true, unique: true })
  id: number;

  @Prop({ type: Number, required: true })
  bookId: number;

  @Prop({ type: String, required: true })
  comment: string;
}

export const BookCommentSchema = SchemaFactory.createForClass(BookComment);
