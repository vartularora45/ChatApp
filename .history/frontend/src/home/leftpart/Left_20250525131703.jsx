import React from 'react'
import Search from './search.jsx'
import Users from './users.jsx'
import Logout from './logout.jsx'
import Profile from './Profile.jsx'
const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-black text-white'
    >
        <Search />
        <Users />
        <Logout />
        <Profile/>
    </div>
  )
}

export default Left