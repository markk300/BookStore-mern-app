import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Details() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/books/${id}` && `https://book-mern-app.onrender.com/books/${id}`);
        setBook(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
        alert("Failed to load the book. Please try again later.");
      }
    };

    fetchHandler();
  }, [id]);

  return (
    <div className="book-details">
      <h1>About Book</h1>
      {book ? (
        <div className="book-container">
          <div className="book-content">
            <div className="book-img">
              <img src={book.image} alt="Book cover" />
            </div>
            <div className="book-text">
              <h2 className="title">{book.title}</h2>
              <p className="book-author">Author: {book.author}</p>

              <p>{book.description}</p>
              <p className="book-price">${book.price}</p>
            </div>
          </div>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
            BACK
          </button>{" "}
          &nbsp;
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default Details;
