import React, { useEffect, useState } from "react";
import "./Books.css";
import axios from "axios";
import BookSection from "./BookSection";

const URL = "http://localhost:3001/books";

function Books() {
  const [books, setBooks] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetch = async (req, res) => {
      try {
        return await axios.get(URL).then((res) => setBooks(res.data.books));
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="books">
      <div className="title-input">
        <h1>Books</h1>
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
      </div>
      <div className="card">
        {books ? (
          <BookSection
            data={books.filter(
              (val) =>
                val.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                val.author.toLowerCase().includes(searchInput.toLowerCase())
            )}
          />
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}

export default Books;
