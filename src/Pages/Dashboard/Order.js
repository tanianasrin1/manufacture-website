import React from 'react';
import { toast } from 'react-toastify';

const Order = ({order, index, refetch}) => {

    const handleDelete = ()=>{
       fetch(`https://evening-citadel-12417.herokuapp.com/deleteBooking/${order._id}`, {
           method: "DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
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
        <td>{order?.email}</td>
        <td>{order?.number}</td>
         <td>
                {
                order?.status === 'unpaid' ?
                <>
                <button class="btn btn-sm mr-2">pay</button>
                <button onClick={handleDelete} class="btn btn-sm">Delete</button> 
                </>
                :
                <p>{order?.status}</p>
                }
                
                </td>
         </tr>
    );
};

export default Order;