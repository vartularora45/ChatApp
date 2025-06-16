import React from 'react'
import { useSocketContext } from './socketContext'

const useGetSocketMessage = () => {
    const {} = useSocketContext();
    const {messages , setMessag}

  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage