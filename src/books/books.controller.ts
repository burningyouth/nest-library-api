import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService, CreateBook, UpdateBook } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get()
  findAll() {
    return this.service.getBooks();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.getBook(+id);
  }

  @Post()
  create(@Body() book: CreateBook) {
    return this.service.createBook(book);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: UpdateBook) {
    return this.service.updateBook(+id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.deleteBook(+id);
  }
}
