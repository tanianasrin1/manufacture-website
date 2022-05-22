import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({tool}) => {
    const {name, img, price, description, quantity} = tool;
    return (        
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  
      <h4>Name: {name} </h4>
      <h6>name: {price} </h6>
      <p>Des: {description} </p>
      <p>Price: {price} </p>
      <p>Available-quantity: {quantity} </p>
    
    <div class="card-actions">
      <Link className="btn btn-primary" to = '/purchase'>Buy Now</Link>
    </div>
  </div>
</div>
    );
};

export default Tool;