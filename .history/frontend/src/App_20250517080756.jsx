import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/Right.jsx'
const App = () => {
  return (
    <div
    className='flex h-screen bg-gray-800 text-white'
    >
      <Left />
      <Right />
    </div>
  )
}

export default App
