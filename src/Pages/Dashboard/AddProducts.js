import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
 

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => console.log(data);
    // const imgbb = '52ad69453d156ba9876338195fd1a8a5'


    const onSubmit = (data) => {
        const name = data.name;
        const description = data.description;
        const quantity = data.quantity;
        const price = data.price;
        const min = data.min;
        const imgcc = data.img
        
        const service = {
                        name: name,
                        img: imgcc,
                        quantity: quantity,
                        min: min,
                        price: price,
                        description: description
                    }

     

                    // Post to database
                    fetch('https://evening-citadel-12417.herokuapp.com/upload', {
                        method: 'POST',
                        headers: {
                            "content-type" : "application/json",
                            authorization : `Bearer ${localStorage.getItem('accessToken')}`
                            
                        },
                        body: JSON.stringify(service)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.insertedId ){
                            toast.success("Product Add Successfully")
                            reset();
                        }else{
                            toast.error("Faild to Add Product")
                        }
                    })
            
        
    }
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name'  {...register("name")} /> 
        <input type="text"    {...register("img")} />
        <input type="text" placeholder='Description'  {...register("description")} />
        <input type="number" placeholder='price'  {...register("price")} />
        <input type="number" placeholder='Available Quantity'  {...register("quantity")} />
        <input type="number" placeholder='Minimum Quantity'  {...register("min")} />
        
          
        <input type="submit" />
      </form>
    );
};

export default AddProducts;