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
export const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
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

export const updateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Book not find, unable to update" });
  }
  return res.status(200).json({ book });
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};
