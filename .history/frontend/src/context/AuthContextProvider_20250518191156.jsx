import React, { createContext } from 'react'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  return (
    <div>AuthContextProvider</div>
  )
}

export default AuthContextProvider