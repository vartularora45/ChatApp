import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/Right.jsx'
const App = () => {
  return (
    <div
    className='flex h-screen w-screen bg-gray-100'
    >
      <Left />
      <Right />
    </div>
  )
}

export default App
