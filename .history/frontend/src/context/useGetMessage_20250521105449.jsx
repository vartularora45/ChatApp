import React from 'react'
import { useState } from 'react'
import useConversation from '../components/zustand/useConversation';
import { useEffect } from 'react';

const useGetMessage = () => {
    const {loading , setLoading} = useState(false);
    const {messages , setMessages , selectedConversation } = useConversation();
    useEffect(()=>{
        const getMessages = async () => {
            try{
                setLoading(true);
                const res = await fetch(`http://localhost:5000/conversations/${selectedConversation._id}/messages`);
                const data = await res.json();
                setMessages(data);
            }catch(err){
                console.log(err);
            }
            setLoading(false);
        }
        getMessages();
    },[selectedConversation])
    }) 
  return (
    <div>useGetMessage</div>
  )
}

export default useGetMessage