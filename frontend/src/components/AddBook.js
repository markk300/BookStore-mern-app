import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/books" && `https://book-mern-app.onrender.com/books`, inputs);
      alert("Book Added");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Failed to delete the book. Please try again later.");
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">TITLE:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Book of love..."
          required
          value={inputs.title}
          onChange={handleChange}
        />

        <label htmlFor="author">AUTHOR:</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Mark M..."
          required
          value={inputs.author}
          onChange={handleChange}
        />

        <label htmlFor="description">DESCRIPTION:</label>
        <textarea
          id="description"
          name="description"
          placeholder="About book"
          required
          value={inputs.description}
          onChange={handleChange}
        />

        <label htmlFor="price">PRICE:</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          value={inputs.price}
          onChange={handleChange}
        />

        <label htmlFor="imageURL">IMAGE URL:</label>
        <input
          type="url"
          id="imageURL"
          name="image"
          placeholder="https://picsum.photos/200"
          required
          value={inputs.image}
          onChange={handleChange}
        />

        <button type="submit" className="add-book">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBook;
