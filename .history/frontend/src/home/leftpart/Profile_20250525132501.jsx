import React from 'react';
import { useAuth } from '../../context/AuthContextProvider';

const Profile = () => {
    const {user} = useAuth();
    console.log(user);
  return (
     div
  );
};


export default Profile;
