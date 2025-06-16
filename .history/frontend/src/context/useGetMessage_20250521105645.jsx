import React from 'react'
import { useState } from 'react'
import useConversation from '../components/zustand/useConversation';
import { useEffect } from 'react';

const useGetMessage = () => {
    const {loading , setLoading} = useState(false);
    const {messages , setMessages , selectedConversation } = useConversation();
    useEffect(()=>{
        const getMessages = async () => {
            setLoading(true);
        try {
           const getMessages = async () => {
            try {
                const response = await fetch(`http://localhost:3000/messages/${selectedConversation.id}`);
                const data = await response.json();
                setMessages(data);
            } catch (error

            
        } catch (error) {
            console.log(error)
        }
    }
    getMessages();
    },[selectedConversation]) 
    useEffect(()=>{
        const getMessages = async () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }) 
  return (
    <div>useGetMessage</div>
  )
}

export default useGetMessage