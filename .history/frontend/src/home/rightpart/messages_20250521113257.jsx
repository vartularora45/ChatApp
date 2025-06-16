import React from 'react'
import Message from './message'
import { getMessages } from '../../context/useGetMessage'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div
    className='flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4'
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