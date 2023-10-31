import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './interfaces/books';
import { JoiValidationPipe } from 'src/validation/pipes/validation.pipe';
import { bookCreateSchema, bookUpdateSchema } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get()
  findAll() {
    return this.service.getBooks();
  }

  @Get(':id')
  findById(@Param('id') id: Id) {
    return this.service.getBook(id);
  }

  @UsePipes(new JoiValidationPipe(bookCreateSchema))
  @Post()
  create(@Body() book: CreateBookDto) {
    return this.service.createBook(book);
  }

  @UsePipes(new JoiValidationPipe(bookUpdateSchema))
  @Put(':id')
  update(
    @Param('id') id: Id,
    @Body()
    book: UpdateBookDto
  ) {
    return this.service.updateBook(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: Id) {
    return this.service.deleteBook(id);
  }
}
