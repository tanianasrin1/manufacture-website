import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Order from './Order';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const {data: myOrders, isLoading, refetch}= useQuery('orders', () => fetch(`http://localhost:5000/book/${user?.email}`)
    .then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-center text-purple-400 text-2xl my-6">MyOrder Page</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name </th>
        <th>Email</th>
        <th>Order Quantity </th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
     {
       myOrders.map((order,index) => <Order
        index= {index}
        key = {order._id}
        order = {order}
        refetch={refetch}
       ></Order>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;