import { Module } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';
import { BookCommentsGateway } from './book-comments.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { BookComment, BookCommentSchema } from './schemas/book-comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookComment.name, schema: BookCommentSchema }
    ])
  ],
  providers: [BookCommentsService, BookCommentsGateway]
})
export class BooksCommentsModule {}
