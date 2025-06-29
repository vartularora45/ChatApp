import React from 'react'
import Search from './Search.jsx'
import Users from './Users.jsx'
import Logout from './Logout.jsx'
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
        className='flex align-middle justify-between'>
          <Logout />
        <button
        onClick={() => setShowProfile(true)} // Show profile on click
        className="rounded-full bg-white text-blue-600 w-10 h-10 flex items-center justify-center hover:bg-blue-100"
      >
        <i className="ri-user-line text-3xl"></i>
      </button>

      {showProfile && (
        <div className="mt-3">
          <Profile
  
          />
        </div>
      )}
        </div>
    </div>
  )
}

export default Left