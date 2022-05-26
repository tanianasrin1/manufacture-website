import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const { _id, name, img, price, description, quantity, min} = tool;
    const navigate = useNavigate();

   
    return (        
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  
      <h4>Name: {name} </h4>
      <h6> Price : {price} </h6>
      <p>Des: {description} </p>
      <p>Available Quantity: {quantity} </p>
      <p>Minimum Quantity: {min} </p>
      
    
    <div class="card-actions">
      <button onClick={() => navigate(`/service/${_id}`) } className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;