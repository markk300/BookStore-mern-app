import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [inputs, setInputs] = useState("");
  const { updateid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        await axios
          .get(`http://localhost:3001/books/${updateid}` && `https://book-mern-app.onrender.com/books/${updateid}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      } catch (err) {
        console.error(err);
        alert("Failed to load the book. Please try again later.");
      }
    };
    fetchHandler();
  }, [updateid]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:3001/books/${updateid}`, {
        title: String(inputs.title),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    navigate("/");
  };
  return (
    <div>
      <h2>Add Book</h2>
      {inputs && (
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

          <button type="submit" className="add-book">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Update;
