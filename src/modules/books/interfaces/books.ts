export type CreateBookDto = Omit<IBook, 'id'>;
export type UpdateBookDto = Partial<IBook>;
export interface IBook {
  title: string;
  description: string;
  authors: string;
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}
