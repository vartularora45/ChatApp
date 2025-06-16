import React from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Message from './Messages'
const Right = () => {
  return (
    <div
    className='w-[70%] h-screen bg-slate-800 text-white '
    ><ChatUsers />
    <TypeSend />
    <Messages />
    </div>

  )
}

export default Right