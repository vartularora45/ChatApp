import React from 'react'
import { useSocketContext } from './socketContext'

const useGetSocketMessage = () => {
    const {} = useSocketContext();
    const {messages , setM}

  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage