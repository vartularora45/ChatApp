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
        try {
           const getMessages = async () => {
            try {
                const response = axios.get('http://localhost:3000/api/message/send/682ab5f8957a2dc451ed9e88`})
                setMessages(response.data)
                
                setMessages(data);
           

            
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