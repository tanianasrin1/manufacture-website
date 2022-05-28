import React from 'react';

const Manage = ({order, index}) => {
 const removeProduct = () =>{

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