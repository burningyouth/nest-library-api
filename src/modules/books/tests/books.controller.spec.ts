import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { Book } from '../schemas/book.schema';

const bookStub = (): Book & { _id: Id } => ({
  _id: '1',
  title: 'Test Book',
  authors: 'Test Author',
  description: 'Test Description',
  favorite: 'no',
  fileBook: '',
  fileName: '',
  fileCover: ''
});

describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: {
            getBooks: jest.fn().mockResolvedValue([bookStub()]),
            getBook: jest.fn().mockResolvedValue(bookStub()),
            createBook: jest.fn().mockResolvedValue(bookStub()),
            updateBook: jest.fn().mockResolvedValue(bookStub()),
            deleteBook: jest.fn().mockResolvedValue(bookStub())
          }
        }
      ]
    }).compile();

    booksController = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
  });

  it('should return all books', async () => {
    expect(await booksController.findAll()).toEqual([bookStub()]);
    expect(booksService.getBooks).toBeCalled();
  });

  it('should return one book', async () => {
    expect(await booksController.findById('1')).toEqual(bookStub());
    expect(booksService.getBook).toBeCalledWith('1');
  });

  it('should create a book', async () => {
    const book = bookStub();
    expect(await booksController.create(book)).toEqual(book);
    expect(booksService.createBook).toBeCalledWith(book);
  });

  it('should update a book', async () => {
    const book = bookStub();

    expect(await booksController.update('1', book)).toEqual(book);
    expect(booksService.updateBook).toBeCalledWith('1', book);
  });

  it('should remove a book', async () => {
    expect(await booksController.delete('1')).toEqual(bookStub());
    expect(booksService.deleteBook).toBeCalledWith('1');
  });
});
