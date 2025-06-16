import React from 'react'
import { useSocketContext } from './socketContext'

const useGetSocketMessage = () => {
    const {} = useSocketContext();
    const {messages , setMessage} = useCon

  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage