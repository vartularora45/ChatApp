import React from 'react';
import { useAuth } from '../../context/AuthContextProvider';

const Profile = () => {
    const {user} = useAuth
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center">
        <img
          src={user.avatarUrl || 'https://i.pravatar.cc/300?img=12'}
          alt={`${user.name} avatar`}
          className="w-40 h-40 rounded-full object-cover mx-auto mb-8 border-4 border-indigo-500"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{user.name || 'Anonymous'}</h1>
        <p className="text-xl text-gray-700 mb-6 italic max-w-xs mx-auto">{user.bio || 'This user hasn’t added a bio yet.'}</p>
        <div className="flex items-center justify-center mb-8 space-x-4">
          <span
            className={`inline-block w-5 h-5 rounded-full ${
              user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
            }`}
          ></span>
          <p className="text-lg font-medium text-gray-600 capitalize">{user.status || 'offline'}</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-xl transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
