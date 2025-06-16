import React from 'react'
import Message from './message'
const Messages = () => {
  return (
    <div
    className='flex1 bg-grw-full h-[80%] overflow-y-scroll bg-slate-500 text-white p-4'
    >
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages