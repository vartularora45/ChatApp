import React from 'react';
import { useAuth } from '../../context/AuthContextProvider';

const Profile = ({ user }) => {
    const {user} = useAuth()
  return (

    <div className="w-72 p-6 bg-gray-100 rounded-lg shadow-md text-center font-sans">
      <img
        src={ 'https://i.pravatar.cc/150?img=3'}
        alt={`${user.username} avatar`}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{user.name || 'Anonymous'}</h2>
      <p className="flex items-center justify-center text-gray-600 my-2 space-x-2">
        <span
          className={`w-3 h-3 rounded-full inline-block ${
            user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
        <span>{user.status || 'offline'}</span>
      </p>
      <p className="italic text-gray-700 mb-6">{user.bio || 'No bio available.'}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
