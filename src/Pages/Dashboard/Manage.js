import React from 'react';

const Manage = ({tool, index}) => {
 const removeProduct = () =>{

 }

    return (
        <tr>
        <th>{index+1}</th>
        <td>{tool.name}</td>
        <td>{tool.price}</td>
        <td><button onClick={removeProduct} class="btn btn-xs">Remove Product</button></td>
        
      </tr>
    );
};

export default Manage;