import React from 'react';
import { toast } from "react-toastify";

const UserRow = ({user, index, refetch}) => {
  const {email} = user;
  const makeAdmin = () =>{
     fetch(`http://localhost:5000/user/admin/${email}`, {
       method: 'PUT',
       headers: {
         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
     .then(data => {
      if(data.modifiedCount){
        toast.success('Make admin success')
        refetch()
      };
     })
  }
  const removeUser = () =>{
     fetch(`http://localhost:5000/userDelete/${email}`, {
       method: 'DELETE',
       headers: {
         authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }
     })
     .then(res => res.json())
     .then(data => {
       if(data.modifiedCount){
         toast.success('User delete success');
         refetch()
       };
     })
  }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{user?.role === 'admin' ? <span>Admin</span> : <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> }</td>
        <td><button onClick={removeUser} class="btn btn-xs">Remove User</button></td>
        <td>Blue</td>
      </tr>
    );
};

export default UserRow;