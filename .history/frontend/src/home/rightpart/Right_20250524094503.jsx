import React, { useEffect } from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Messages from './Messages'
import useConversation from '../../components/zustand/useConversation'
const Right = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(()=>{
   
    return ()=>{
      setSelectedConversation(null)
    }
  },[selectedConversation])
  return (
    <div>
      {!selectedConversation ?(<Loading />
      ) :(<> <ChatUsers />
      <Messages />
      <TypeSend />
      </>)}
    </div>

  )
}

export default Right


const NoChatSelected = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[200px] h-[200px] bg-gray-200 rounded-full flex justify-center items-center'>
        
      </div>
    </div>
  )
}