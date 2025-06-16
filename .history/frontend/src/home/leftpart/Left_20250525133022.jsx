import React from 'react'
import Search from './search.jsx'
import Users from './users.jsx'
import Logout from './logout.jsx'
import Profile from './Profile.jsx'
const Left = () => {

  const [showProfile, setShowProfile] = React.useState(false);
  return (
    <div
    className='w-[30%] h-screen bg-black text-white'
    >
        <Search />
        <Users />
        <div
        className='flex'>
          <Logout />
        <button
        onClick={() => setShowProfile(true)} // Show profile on click
        className="rounded-full bg-white text-blue-600 w-10 h-10 flex items-center justify-center hover:bg-blue-100"
      >
        <i className="ri-user-line text-3xl"></i>
      </button>

      {showProfile && (
        <div className="mt-6">
          <Profile
  
          />
        </div>
      )}
        </div>
    </div>
  )
}

export default Left