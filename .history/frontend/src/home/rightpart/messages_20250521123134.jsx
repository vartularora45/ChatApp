import React from 'react'
import Message from './message'
import  getMessages from '../../context/useGetMessage.jsx'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div
    className='flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4'
    >

       {!loading && messages.map((message) => (
        <Message key={message._id} message={message} />
      ))
    </div>
  )
}

export default Messages