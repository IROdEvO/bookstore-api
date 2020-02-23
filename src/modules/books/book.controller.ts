import { Request, Response, response } from 'express';
import Book from './book.schema';

export const getBooks = async (req: Request, res: Response): Promise<void> => {
  const books = await Book.find({});
  res.status(200).json(books);
};

export const getBookById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const books = await Book.findById(req.params.bookId);
  res.status(200).json(books);
};

export const addBook = async (req: Request, res: Response): Promise<void> => {
  let book = new Book(req.body);
  book = await book.save();
  res.status(201).json(book);
  
};
