import React from 'react'
import { useState } from 'react'
import useConversation from '../components/zustand/useConversation';
import { useEffect } from 'react';

const useGetMessage = () => {
    const {loading , setLoading} = useState(false);
    const {messages , setMessages , selectedConversation } = useConversation();
    useEffect(()=>{
        const getMessages = async () => {
        try
    }) 
  return (
    <div>useGetMessage</div>
  )
}

export default useGetMessage