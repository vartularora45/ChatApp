import React, { useEffect } from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Messages from './Messages'
import useConversation from '../../components/zustand/useConversation'
import { useAuth } from '../../context/AuthContextProvider'
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
  const [authUser] = useAuth();
  return (
    
  )
}

}