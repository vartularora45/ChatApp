import React from 'react'
import { useState } from 'react'
import useConversation from '../components/zustand/useConversation';

const useGetMessage = () => {
    const {loading , setLoading} = useState(false);
    const {messages , setMessages , selectedConversation } = useConversation();
     
  return (
    <div>useGetMessage</div>
  )
}

export default useGetMessage