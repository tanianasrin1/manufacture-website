import React from "react";
import './Review.css'

const Review = ({ review }) => {
  const { img, des, date, name, country, rating } = review;

  return (
    <div className="review p-4">
      <div className="flex justify-center m-2">
        <div className="review-img">
          <img width= {100}  src={img} alt="" />
        </div>
        <div className="mx-3">
          <h4>Name: {name} </h4>
          <h6> {country} </h6>
        </div>
      </div>
      <p> {des} </p>
      <h5> <strong>Date:</strong> {date} </h5>
      <h5> <strong>Rating:</strong> {rating} </h5>
    
    </div>
  );
};

export default Review;
