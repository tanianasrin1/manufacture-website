import React from 'react';

const Profile = ({profile}) => {
    const {name, img, email, mob, loc} = profile;
    return (
        <div>
            <h2>Name: {name} </h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Profile;