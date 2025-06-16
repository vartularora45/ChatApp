import React, { useEffect } from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Messages from './Messages'
import useConversation from '../../components/zustand/useConversation'
const Right = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(()=>{
   
    return 
  },[selectedConversation])
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