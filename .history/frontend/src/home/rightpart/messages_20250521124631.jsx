import React from 'react'
import Message from './message'
import  getMessages from '../../context/useGetMessage.jsx'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div
    className='flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4'
    >

      {(!loading && messages && messages.length > 0) ? messages.map((message)=>{
        return <Message key={message.id} message={message} />
      }) : <p className='text-center text-slate-400'>No Messages Found</p>}
      {loading && <p className='text-center text-slate-400'>Loading...</p
      
    </div>
  )
}

export default Messages