import React from 'react'
import { useState } from 'react'
import useConversation from '../components/zustand/useConversation';
import { useEffect } from 'react';
import axios from 'axios';

const useGetMessage = () => {
    const {loading , setLoading} = useState(false);
    const {messages , setMessages , selectedConversation } = useConversation();
    useEffect(()=>{
        const getMessages = async () => {
            setLoading(true);
            
         if(selectedConversation && selectedConversation._)
    }
    getMessages();
    },[]) 
   
  return (
    <div>useGetMessage</div>
  )
}

export default useGetMessage