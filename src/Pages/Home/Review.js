import React from "react";
import './Review.css'

const Review = ({ review }) => {
  const {  des, name,  rating } = review;

  return (
    <div className="review p-4">
      <div className="flex justify-center m-2">
        
        <div className="mx-3">
          <h4>Name: {name} </h4>
          
        </div>
      </div>
      <p> {des} </p>
      <h5> <strong>Rating:</strong> {rating} </h5>
    
    </div>
  );
};

export default Review;
