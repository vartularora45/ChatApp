import React from 'react';
import { useAuth } from '../../context/AuthContextProvider';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-transparent z-10">
     
      <div className="flex flex-col items-center p-6">
        {/* Back button */}
        <button
          onClick={() => 
            
          }
          className="self-start mb-4 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold"
        >
          ← Back
        </button>

        {/* Profile card */}
        <div className="w-full max-w-md rounded-lg shadow-lg p-6 flex flex-col items-center bg-gray-800">
          <img
            src={user.avatarUrl || "https://i.pravatar.cc/300?img=56"}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-600 mb-6"
          />
          <h1 className="text-3xl font-semibold mb-2 text-gray-100">
            {user.username || "Username"}
          </h1>
          <p className="text-gray-400 mb-4 italic">
            {user.bio || "Hey there! I am using ChatApp."}
          </p>

          <div className="w-full border-t border-gray-700 pt-4">
            <h2 className="text-sm font-semibold text-gray-400 mb-1">About</h2>
            <p className="text-gray-300">{user.status || "Available"}</p>
          </div>

          <div className="w-full border-t border-gray-700 pt-4 mt-6">
            <h2 className="text-sm font-semibold text-gray-400 mb-1">
              Contact info
            </h2>
            <p className="text-gray-300">{user.email || "No email provided"}</p>
          </div>

          <button className="mt-8 w-full bg-gray-700 text-gray-300 font-semibold py-3 rounded-lg hover:bg-gray-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
