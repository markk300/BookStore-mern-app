import express from "express";
import {Book} from "../models/Book.js";
import { getAllBooks, addBook } from "../controllers/books-controllers.js";
const router = express.Router();

router.get("/", getAllBooks)
router.post("/", addBook)

export { router as bookRoutes };
