import React, { createContext } from 'react'

const AuthContext = createContext();

const AuthContextProvider = ({chil}) => {
  return (
    <div>AuthContextProvider</div>
  )
}

export default AuthContextProvider