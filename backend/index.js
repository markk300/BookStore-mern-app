import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { bookRoutes } from "./routes/book-routes.js";

dotenv.config();

const app = express();
const connection = process.env.MONGO_CONNECTION;
const port=3001;
//Middlewares
app.use(express.json());
app.use(cors());


app.use("/books", bookRoutes);

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
    app.listen(port, () => console.log("Listening on port 3001"));
  })
  .catch((err) => console.log("MongoDB connection error:", err));
