import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css"

function Details() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/books/${id}`);
        setBook(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
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
              <img src={book.image} />
            </div>
            <div className="book-text">
              <h2 className="title">{book.title}</h2>
              <p className="book-author">Author: {book.author}</p>

              <p>{book.description}</p>
              <p className="book-price">${book.price}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
