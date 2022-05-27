import React, { useEffect, useState } from 'react';
import Profile from './Profile';

const MyProfile = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect( () => {
        fetch('myProfile.json')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-uppercase text-3xl'>My Profile</h2>
             <div>
                 {
                     profiles.map(profile => <Profile
                       key = {profile.id}
                       profile = {profile}
                     ></Profile>)
                 }
             </div>
        </div>
    );
};

export default MyProfile;