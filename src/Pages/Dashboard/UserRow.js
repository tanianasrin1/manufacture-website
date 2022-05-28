import React from 'react';
import { toast } from "react-toastify";

const UserRow = ({user, index, refetch}) => {
  const {email} = user;
  const makeAdmin = () =>{
     fetch(`https://evening-citadel-12417.herokuapp.com/user/admin/${email}`, {
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
     fetch(`https://evening-citadel-12417.herokuapp.com/userDelete/${email}`, {
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
        
      </tr>
    );
};

export default UserRow;