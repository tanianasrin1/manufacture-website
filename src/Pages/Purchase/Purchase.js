import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const { serviceId } = useParams();

  const [user] = useAuthState(auth)
  const [purchase, setPurchase] = useState();

  console.log(purchase);
  
  const addressRef = useRef('');
  const phoneRef = useRef('');
  const numberRef = useRef('');

  useEffect(() => {
    const url = `http://localhost:5000/singleProduct?id=${serviceId}`;

    axios.get(url).then((data) => setPurchase(data.data));
  }, [serviceId]);

  const handleBooking = event => {
    event.preventDefault();
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const number = numberRef.current.value;
    console.log(number)
    
    if(number < purchase?.min){
         return toast.error(`Minimum order quantity is ${purchase?.min}`)  
    }

    const book = {
       price: purchase?.price,
       Des: purchase?.description,
       img: purchase?.img,
       email: user.email,
       name: user.displayName,
       status: 'unpaid',
       address,
       phone,
       number
    }

    fetch('http://localhost:5000/book', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(book)
    })
    .then(res=> res.json())
      .then(data => {
        console.log(data);
        toast.success('success')
      })
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
          <p>minimum Quantity: {purchase?.min} </p>
        </div>
      </div>

      {/* <div class="divider h-50 lg:divider-horizontal my-16 mx-24">OR</div> */}

      <div class="card w-96 bg-base-100 shadow-xl my-16">
        
        <div className="m-3">
          <h2 className="text-center text-primary my-6">Purchase</h2>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
          <input type="text" disabled value={user.displayName} name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
          <input type="email" disabled value={user.email} name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
          <input type="text" ref={addressRef} name="address" placeholder="address" class="input input-bordered w-full max-w-xs" />
          <input type="text" ref={phoneRef} name="phone" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
          <input type="number" ref={numberRef} res name="number" placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
          <input type="submit" value="Buy Now" class="btn btn-primary w-full max-w-xs" />

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Purchase;
