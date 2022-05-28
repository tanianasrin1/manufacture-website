import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
  
  const [user] = useAuthState(auth);
  const {data: profiles, isLoading, refetch}= useQuery('profiles', () => fetch(`http://localhost:5000/profile/${user?.email}`).then(res => res.json()));
  if(isLoading){
      return <Loading></Loading>
  }

  
  const handleSave = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const profilePic = e.target.profile.value;
    const linkdin = e.target.linkdin.value;
    const updateProfile = { education, address, phone, linkdin, profilePic };

    fetch(`http://localhost:5000/updateprofile/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          e.target.reset();
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-uppercase text-3xl">My Profile</h2>
      {/* <div>
                <h1>{user?.displayName}</h1>
                <h1>{profiles?.email}</h1>
                <h1>{profiles?.address}</h1>
                <h1>{profiles?.phone}</h1>
                <img src={profiles?.profilePic} alt="" /> 
             </div> */}
      <div class="card w-96 bg-base-100 shadow-xl my-12 mx-auto">
        <div class="avatar">
          <div class="w-24 rounded-full mx-auto my-3 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src= {profiles?.profilePic}  />
          </div>
        </div>
        <div class="card-body text-center">
          <h2> {profiles?.displayName}</h2>
          <p>Email: {profiles?.email} </p>
          <p>Address: {profiles?.address} </p>
          <p>Phone: {profiles?.phone} </p>
          
        </div>
      </div>
      <section className="max-w-2xl mx-auto px-2 my-6">
        <h1 className="my-2">Update Profile</h1>
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="education"
            placeholder="Your Education"
            className="input input-bordered w-full max-w-xl mb-3"
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="input input-bordered w-full max-w-xl mb-3"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xl mb-3"
          />
          <input
            type="text"
            name="linkdin"
            placeholder="LinkedIn Profile url"
            className="input input-bordered w-full max-w-xl mb-3"
          />
          <input
            type="text"
            name="profile"
            placeholder="Profile picture"
            className="input input-bordered w-full max-w-xl mb-3"
          />
          <input
            type="submit"
            className="btn btn-primary block"
            value="Save Changes"
          />
        </form>
      </section>
    </div>
  );
};

export default MyProfile;
