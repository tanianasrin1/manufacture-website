import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Purchase = () => {
  const { serviceId } = useParams();

  const [purchase, setPurchase] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/singleProduct?id=${serviceId}`;

    axios.get(url).then((data) => setPurchase(data.data));
  }, [serviceId]);

  const handleBooking = event => {
    event.preventDefault();
  }

  return (
    <div class="flex flex-col w-full lg:flex-row">
      <div class="card w-96 bg-base-100 shadow-xl my-16 mx-24">
        <figure class="px-10 pt-10">
          <img src={purchase?.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name: {purchase?.name}</h2>
          <p> Price: ${purchase?.price}</p>
          <p>Des: {purchase?.description}</p>
          <p>Available Quantity: {purchase?.quantity}</p>
          <p>minimum Quantity: {purchase?.min}</p>
        </div>
      </div>

      {/* <div class="divider h-50 lg:divider-horizontal my-16 mx-24">OR</div> */}

      <div class="card w-96 bg-base-100 shadow-xl my-16">
        
        <div className="m-3">
          <h2 className="text-center text-primary my-6">Purchase</h2>
          <from onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
          <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
          <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
          <input type="text" name="address" placeholder="address" class="input input-bordered w-full max-w-xs" />
          <input type="text" name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
          <input type="number" name="number" placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
          <input type="submit" value="Buy Now" class="btn btn-primary w-full max-w-xs" />

          </from>
          
        </div>
      </div>
    </div>
  );
};

export default Purchase;
