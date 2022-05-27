import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data => setReviews(data) )
    } , [])
    return (
        <div className='py-12'>
            <h2 className='text-center text-3xl text-uppercase'>Reviews</h2>
            <div className='reviews py-8'>
                {
                   reviews.map(review => <Review 
                      key = {review.id}
                      review = {review}
                   ></Review>) 
                }
            </div>
        
        </div>
    );
};

export default Reviews;