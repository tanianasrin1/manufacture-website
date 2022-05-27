import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
 

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => console.log(data);
    const imgbb = '52ad69453d156ba9876338195fd1a8a5'


    const onSubmit = (data) => {
        const name = data.name;
        const description = data.description;
        const quantity = data.quantity;
        const price = data.price;
        const min = data.min;
        
        

        const img = data.img[0];
        const formData = new FormData();
        formData.append('img', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgbb}`;
       
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                console.log(img);
                const service = {
                    name: name,
                    img: img,
                    quantity: quantity,
                    min: min,
                    price: price,
                    description: description
                }
                // console.log(product);

                    // Post to database
                    fetch('http://localhost:5000/upload', {
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
            
        }})
    }
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name'  {...register("name")} />
        <input type="file"    {...register("img")} />
        <input type="text" placeholder='Description'  {...register("description")} />
        <input type="number" placeholder='price'  {...register("price")} />
        <input type="number" placeholder='Available Quantity'  {...register("quantity")} />
        <input type="number" placeholder='Minimum Quantity'  {...register("min")} />
        
          
        <input type="submit" />
      </form>
    );
};

export default AddProducts;