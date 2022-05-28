import React from 'react';
import bg from '../../images/image/f (1).jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-3xl my-6 text-center text-purple-500'>Not Found!!!</h2>
            <img className='img-design mb-6' src={bg} alt="" />
        </div>
    );
};

export default NotFound;