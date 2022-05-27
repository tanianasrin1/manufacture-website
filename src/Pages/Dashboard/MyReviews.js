import React from 'react';
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const handleAddReview = (e) =>{
        e.preventDefault();
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        
        const newRating = parseFloat(rating);
        // const date = new Date().getDate();
        const reviewData = {
            des: comment,
            rating: newRating,
            name: user?.displayName,
            // date: date
            

        }
       fetch('http://localhost:5000/review',{
           method: 'POST',
           headers: {
               'content-type': 'application/json', 
            //    authorization: `Bearer ${localStorage.getItem('token')}`

           },
           body: JSON.stringify(reviewData)
           
       })
       .then(res=> res.json())
       .then(data => {
           if(data.insertedId){
               toast.success('Review add successfully');
               e.target.reset();
           }
       })

    }
    return (
        <form onSubmit={handleAddReview} className="grid grid-cols-1 gap-3">
          <input type="text"  name="rating" placeholder="ratings" class="input input-bordered w-full max-w-xs" />
          <textarea name='comment' class="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
          <input type="submit" value="Buy Now" class="btn btn-primary w-full max-w-xs" />

        </form>
    );
};

export default MyReviews;