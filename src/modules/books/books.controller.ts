import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './interfaces/books';
import { JoiValidationPipe } from 'src/validation/pipes/validation.pipe';
import { bookCreateSchema, bookUpdateSchema } from './schemas/book.schema';
import { JWTAuthGuard } from '../auth/jwt.auth.guard';

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

  @UseGuards(JWTAuthGuard)
  @UsePipes(new JoiValidationPipe(bookCreateSchema))
  @Post()
  create(@Body() book: CreateBookDto) {
    return this.service.createBook(book);
  }

  @UseGuards(JWTAuthGuard)
  @UsePipes(new JoiValidationPipe(bookUpdateSchema))
  @Put(':id')
  update(
    @Param('id') id: Id,
    @Body()
    book: UpdateBookDto
  ) {
    return this.service.updateBook(id, book);
  }

  @UseGuards(JWTAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: Id) {
    return this.service.deleteBook(id);
  }
}
