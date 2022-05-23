import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faUser, faThumbsUp, faDesktop } from '@fortawesome/free-solid-svg-icons'
import './BussinessSummer.css'



const BussinessSummary = () => {
    return (
        <div className='py-12'>
            <h2 className='text-2xl font-bold text-center'>MILLIONS BUSINESS TRUST US</h2>
            
            <div className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 '>
                 <div className='mx-24'>
                     <FontAwesomeIcon className='text-3xl px-2 text-primary' icon={faFlag}></FontAwesomeIcon>
                     <p className='text-5xl'>77</p>
                     <p className='text-primary '>Countries</p>

                 </div>
                 <div className='mx-24'>
                     <FontAwesomeIcon className='text-3xl px-2 text-primary' icon={faDesktop}></FontAwesomeIcon>
                     <p className='text-5xl'>656+</p>
                     <p className='text-primary '>Complete</p>

                 </div>
                 <div className='mx-24'>
                     <FontAwesomeIcon className='text-3xl px-2 text-primary' icon={faUser}></FontAwesomeIcon>
                     <p className='text-5xl'>372+</p>
                     <p className='text-primary '>Happy Clients</p>

                 </div>
                 <div className='mx-24'>
                     <FontAwesomeIcon className='text-3xl px-2 text-primary' icon={faThumbsUp}></FontAwesomeIcon>
                     <p className='text-5xl'>402+</p>
                     <p className='text-primary '>Feedback</p>

                 </div>
            </div>

            <div className='icon-box p-5 flex justify-between'>
               <div>
               <p className='text-primary text-3xl font-bold'>Any question in our product request?</p>
                <p className='text-xl'>Don't Hesitate to contact us </p>
               </div>
               <div>
               <button class="btn btn-active">Contact Us</button>
               </div>
            </div>
        </div>
    );
};

export default BussinessSummary;

// div className="hero min-h-screen w-full h-full"
//         style={
//             {
//                 background: `url(${bg})`,
//                 backgroundSize: 'cover'
//             }
//         }