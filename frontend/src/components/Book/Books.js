import React, { useEffect, useState } from "react";
import "./Books.css"
import axios from "axios";
import BookSection from "./BookSection";


const URL = "http://localhost:3001/books";

function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    const fetch = async (req, res) => {
      return await axios.get(URL).then((res) =>setBooks(res.data.books));
    };
    fetch()
  }, []);
  
  return (
    <div className="books">
      <h1>Books</h1>
      <div className="card">
        {books ? <div>(<BookSection data={books} />) </div>:<div>Loading...</div>}
      </div>
    </div>
  );
}

export default Books;
