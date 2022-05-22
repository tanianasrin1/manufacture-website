import React from "react";
import img from '../../images/image/s (1).jpg'

const ExtraPart1 = () => {
  return (
    <div class="hero min-h-screen container">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Leptop Tools</h1>
          <p class="py-6">
          Feel like making a craft project at home? Whether you are simply bored, want to entertain your friends, or are in need of a project for your kids,
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ExtraPart1;
