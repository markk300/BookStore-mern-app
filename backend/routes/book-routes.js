import express from "express";
import {
  getAllBooks,
  addBook,
  getById,
  updateBook,
  deleteBook,
} from "../controllers/books-controllers.js";
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export { router as bookRoutes };
