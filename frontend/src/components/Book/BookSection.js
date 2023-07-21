import React from "react";
import "./BookSection.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BookSection({ data }) {
  const navigation = useNavigate();

  const deleteHandler = async (item) => {
    try {
      await axios.delete(`http://localhost:3001/books/${item._id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="book">
      {data &&
        data.map((item) => (
          <div className="content" key={item._id}>
            <div className="image">
              <img src={item.image} alt="book" />
            </div>
            <div className="texts">
              <h2 className="title">{item.title}</h2>
              <p className="author">{item.author}</p>
              <p className="price">${item.price}</p>
            </div>
            <div className="buttons">
              <Link to={`update/${item._id}`} className="update">
                Update
              </Link>
              <button onClick={() => deleteHandler(item)} className="delete">
                Delete
              </button>
              <Link to={`/${item._id}`} className="details">
                DETAILS &#8594;
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookSection;
