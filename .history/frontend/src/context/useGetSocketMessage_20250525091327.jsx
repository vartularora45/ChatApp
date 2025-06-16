import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext'
import useConversation from '../components/zustand/useConversation';

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {messages , setMessage} = useConversation();
    useEffect(()=>{
       socket.on("newMessage", (newMessage)=>{
           setMessage(...messages, newMessage);
       })
       return () => socket.off("newMessage");
    },[socket,messages,setMessage])

  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage