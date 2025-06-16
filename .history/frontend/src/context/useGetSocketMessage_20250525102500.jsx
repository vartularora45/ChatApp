import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext'
import useConversation from '../components/zustand/useConversation';

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {messages , setMessages} = useConversation();
    useEffect(()=>{
       socket.on("newMessage", (newMessage)=>{
           setMessages(...message, newMessage);
       })
       return () => socket.off("newMessage");
    },[socket,messages,setMessages])

 
}

export default useGetSocketMessage