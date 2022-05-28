import React, { useEffect, useState } from "react";
import Manage from "./Manage";

const ManageTools = () => {
  const [orders, setOrders] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/allbooking")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Manage All Order</h2>
      <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Email</th>
          <th>Action</th>
          
        </tr>
      </thead>

      <tbody>
        {orders.map((order, index) => (
          <Manage key={order._id} order={order} index={index}></Manage>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ManageTools;
