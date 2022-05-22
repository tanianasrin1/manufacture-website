import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import ExtraPart1 from './ExtraPart1';
import ExtraPart2 from './ExtraPart2';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
             <Banner></Banner>
             <Tools></Tools>
             <ExtraPart1></ExtraPart1>
             <BussinessSummary></BussinessSummary>
             <Reviews></Reviews>
             <ExtraPart2></ExtraPart2>
            
        </div>
    );
};

export default Home;