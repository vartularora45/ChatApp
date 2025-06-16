import React from 'react'
import Message from './message'
import  getMessages from '../../context/useGetMessage.jsx'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div
    className='flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4'
    >

       {loading ? (
          <div className='flex justify-center items-center h-full'>
            <div className='w-10 h-10 border-4 border-white rounded-full animate-spin'></div>
    </div>
  )
}

export default Messages