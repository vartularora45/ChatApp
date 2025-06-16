import React from 'react'
import { useSocketContext } from './socketContext'
import useConversation from '../components/zustand/useConversation';

const useGetSocketMessage = () => {
    const {} = useSocketContext();
    const {messages , setMessage} = useConversation();
    

  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage