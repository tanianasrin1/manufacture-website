import React from 'react';
import { toast } from 'react-toastify';

const Manage = ({order, index, refetch}) => {
 const removeProduct = () =>{
  fetch(`http://localhost:5000/manageDelete/${order._id}`,{
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data.deletedCount){
      refetch();
      toast.success('Order Deleted');
     }
  })
 }

    return (
        <tr>
        <th>{index+1}</th>
        <td>{order?.name}</td>
        <td>{order?.price}</td>
        <td>{order?.Des}</td>
        <td>{order?.email}</td>
        <td><button onClick={removeProduct} class="btn btn-xs">cancel Order</button></td>
        
      </tr>
    );
};

export default Manage;