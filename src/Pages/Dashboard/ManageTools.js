import React, { useEffect, useState } from "react";
import Manage from "./Manage";

const ManageTools = () => {
  const [products, setProduct] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h2>Manage All Order</h2>
      <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Email</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>Favorite Color</th>
        </tr>
      </thead>

      <tbody>
        {products.map((tool, index) => (
          <Manage key={tool.id} tool={tool} index={index}></Manage>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ManageTools;
