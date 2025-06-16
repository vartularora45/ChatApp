import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Left from './home/leftpart/Left.jsx'
import Right from './home/rightpart/Right.jsx'
import SignUp from './components/signup.jsx'
import Login from './components/login.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/sign' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={
          <div className='flex'>
            <Left />
            <Right />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
