import React from 'react';
import my from '../../images/image/myP.jpg'

const MyPortfolio = () => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
  <figure><img src={my} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title"> Tania Nasrin Eva </h2>
    <p> <strong>Email:</strong> tasrineva169@gmail.com</p>
    <p>Hi! My name is Tania Nasrin Eva. I am student of Daffodil International University department of CSE. Now l am a web developer. My skills are:  </p>
    <ol>
        <li>HTML, CSS</li>
        <li>Bootstrap, Tailwind</li>
        <li>Javascript</li>
        <li>Firebase</li>
        <li>React</li>
        <li>Nodejs</li>
        <li>Mongodb</li>

    </ol>
    Some demo project of mine: <br />
    <a href="https://independent-service-2bb06.web.app/" target="_blank"><strong>Link1:</strong> https://independent-service-2bb06.web.app/</a>
    <a href="https://assignment-service-7e7f4.web.app/" target="_blank"><strong>Link2:</strong> https://assignment-service-7e7f4.web.app/</a>
    <a href="https://leptop-tools-bd.web.app/" target="_blank"><strong>Link3: https://leptop-tools-bd.web.app/</strong> </a>
  </div>
</div>
    );
};

export default MyPortfolio;
