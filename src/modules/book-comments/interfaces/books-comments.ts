export type CreateBookCommentDto = Omit<IBookComment, 'id'>;
export type UpdateBookCommentDto = Partial<IBookComment>;
export interface IBookComment {
  id?: Id;
  bookId: Id;
  comment: string;
}
