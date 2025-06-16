import React from 'react'
import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/Right.jsx'
const App = () => {
  return (
    <div
    className='bg-gray-800 text-white flex h-screen'
    >
      <Left />
      <Right />
    </div>
  )
}

export default App
