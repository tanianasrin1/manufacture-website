import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user?.email);
  console.log(admin)
  
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h2 className='text-3xl font-bold text-purple-500'>Welcome to Dashboard</h2>
           <Outlet></Outlet>
        
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          
             {
               !admin && <>
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">Add Reviews</Link></li>
               </>
             } 
            <li><Link to="/dashboard/profile">My Profile</Link></li>
              {
                admin && <>
                          <li><Link to="/dashboard/allUser">All User</Link></li>
                          <li><Link to="/dashboard/addTools">All Products</Link></li>
                          <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                          <li><Link to="/dashboard/manageTools">Manage All Order </Link></li>
                </>
              }
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;