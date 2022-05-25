import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();

  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    const url = `http://localhost:3000/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  return (
    <div class="flex flex-col w-full lg:flex-row">
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <div class="divider lg:divider-horizontal">OR</div>
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  );
};

export default Purchase;
