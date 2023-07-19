import React from "react";
import "./BookSection.css";
import { Link } from "react-router-dom";
function BookSection({ data }) {
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
              <button className="update">Update</button>
              <button className="delete">Delete</button>
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
