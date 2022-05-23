import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('review.json')
        .then(res=> res.json())
        .then(data => setReviews(data) )
    } , [])
    return (
        <div className='py-12'>
            <h2 className='text-center text-uppercase'>Reviews</h2>
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