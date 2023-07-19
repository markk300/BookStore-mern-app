import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

function AddBook() {
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    description: "",
    price: 0,
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit=async(e)=>{
     e.preventDefault()
     try{
     await axios.post("http://localhost:3001/books",inputs)
     alert("Book Added")
     Navigate("/")
     }catch(err){
      console.log(err)
     }
     console.log(inputs)
  }

  return (
    <div>
      <h2>Add Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={inputs.title}
          onChange={handleChange}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          value={inputs.author}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          required
          value={inputs.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          value={inputs.price}
          onChange={handleChange}
        />

        <label htmlFor="imageURL">Image URL:</label>
        <input
          type="url"
          id="imageURL"
          name="image"
          required
          value={inputs.image}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
