import React from 'react'
import Search from './search.jsx'
import Users from './users.jsx'
const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <Search />
        <Users />
    </div>
  )
}

export default Left