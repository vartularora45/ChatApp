import React from 'react'
import { useSocketContext } from './socketContext'

const useGetSocketMessage = () => {
    const {} = useSocketContext();
    
  return (
    <div>useGetSocketMessage</div>
  )
}

export default useGetSocketMessage