import React, { useEffect } from 'react'
import { useSocketContext } from './socketContext'
import useConversation from '../components/zustand/useConversation';

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {message , setMessages} = useConversation();
    useEffect(()=>{
       socket.on("newMessage", (newMessage)=>{
           setMessages(...message, newMessage);
       })
       return () => socket.off("newMessage");
    },[socket,message,setMessages])

 
}

export default useGetSocketMessage