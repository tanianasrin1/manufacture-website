import React, { useEffect, useState } from "react";
import Manage from "./Manage";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageTools = () => {
  const {data: orders, isLoading, refetch}= useQuery('orders', () => fetch('http://localhost:5000/allbooking').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
  // const [orders, setOrders] = useState([]);
  

  // useEffect(() => {
  //   fetch("http://localhost:5000/allbooking")
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);

  return (
    <div className="mt-6">
      <h2 className="text-center text-purple-400 font-bold">Manage All Order</h2>
      <table class="table w-full my-6">
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
          <Manage key={order._id} order={order} index={index}
          refetch={refetch}
          ></Manage>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ManageTools;
