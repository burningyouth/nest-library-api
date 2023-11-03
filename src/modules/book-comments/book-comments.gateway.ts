import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway
} from '@nestjs/websockets';
import { BookCommentsService } from './book-comments.service';
import { CreateBookCommentDto } from './interfaces/books-comments';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class BookCommentsGateway {
  constructor(private service: BookCommentsService) {}
  @SubscribeMessage('get-all-comments')
  getAllComments(@MessageBody() body: { bookId: Id }) {
    return this.service.findAllBookComment(body.bookId);
  }

  @SubscribeMessage('add-comment')
  addComment(@MessageBody() body: CreateBookCommentDto) {
    return this.service.create(body);
  }
}
