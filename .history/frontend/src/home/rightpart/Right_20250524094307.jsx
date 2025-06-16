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
    <div></div>

  )
}

export default Right