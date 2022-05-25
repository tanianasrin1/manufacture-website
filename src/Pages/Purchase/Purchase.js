import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Purchase = () => {
  const {serviceId} = useParams();
 
  const [purchase, setPurchase] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => setPurchase(data));
  }, [serviceId]);

  return (
    <div class="flex flex-col w-full lg:flex-row">

  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content : {serviceId} </div> 
  <div class="divider lg:divider-horizontal">OR</div> 
  <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>
  );
};

export default Purchase;
