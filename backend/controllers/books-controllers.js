import { Book } from "../models/Book.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json({ message: "No Books" });
    }

    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const response = await book.save();
    return res.status(201).json({ book: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add" });
  }
};
