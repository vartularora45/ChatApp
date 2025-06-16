import React from 'react'
import Message from './message'
import  getMessages from '../../context/useGetMessage.jsx'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div
    className='flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4'
    >
      
       {!loading && messages && messages.length === 0 && (
        <div className='bg-blend-color-dodge'>
          <p className='text-2xl font-bold'>No Messages Yet</p>
        </div>
      )}
      
    </div>
  )
}

export default Messages