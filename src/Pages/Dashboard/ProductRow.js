import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({product, index, refetch}) => {



  const DeleteButton = () => {
        fetch(`http://localhost:5000/productDelete/${product._id}`,{
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
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
       
        
        <td><button onClick={DeleteButton}  class="btn btn-xs">Delete</button></td>
        
      </tr>
    );
};

export default ProductRow;
// onClick={removeUser}