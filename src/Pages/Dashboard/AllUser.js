import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from '../Dashboard/UserRow'

const AllUser = () => {
    const {data: users, isLoading, refetch}= useQuery('users', () => fetch('https://evening-citadel-12417.herokuapp.com/user').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="xl my-6 text-center text-purple-500 font-bold">All Users: {users.length} </h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>User</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
     
       {
         users.map((user,index) => <UserRow
         index= {index}
            key = {user._id}
            user = {user}
            refetch={refetch}
         ></UserRow>)
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;