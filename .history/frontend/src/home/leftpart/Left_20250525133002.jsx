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
        
    </div>
  )
}

export default Left