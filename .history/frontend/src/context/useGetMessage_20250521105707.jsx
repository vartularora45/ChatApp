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
                const response = axios.get(`https://chatgpt-clone-8g7z.onrender.com/getMessages/${selectedConversation}`
                
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