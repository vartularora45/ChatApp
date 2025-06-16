import React from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Messages from './messages'
const Right = () => {
  return (
    <div
    className='w-[70%] h-screen bg-slate-500 text-white '
    ><ChatUsers />
    <TypeSend />
    <Messages />
    </div>

  )
}

export default Right