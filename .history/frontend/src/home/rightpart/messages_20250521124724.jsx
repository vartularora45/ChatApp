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
      }) : <p className='text-center text-slate-400'>
        <div className='flex flex-col items-center justify-center text-center space-y-2'>
  <p className='text-3xl font-bold'>📭 No Messages Yet</p>
  <p className='text-lg text-gray-600'>👋 Say hi to start the conversation!</p>
</div>

        </p>}
      {loading && <p className='text-center text-slate-400'>Loading...</p
      >}
    </div>
  )
}

export default Messages