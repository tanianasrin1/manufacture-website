import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const AddTools = () => {
    const {data: products, isLoading, refetch}= useQuery('products', () => fetch('http://localhost:5000/service').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="xl mt-6 text-center text-purple-400 font-bold">All Users: {products.length} </h2>

            <div class="overflow-x-auto">
  <table class="table w-full my-6">
   
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
       {
         products.map((product,index) => <ProductRow
         index= {index}
            key = {product._id}
            product = {product}
            refetch={refetch}
         ></ProductRow>)
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AddTools;