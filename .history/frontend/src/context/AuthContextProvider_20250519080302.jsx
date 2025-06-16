import React, { createContext } from 'react'
import cookies from 'js-cookie'
const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const initialState = cookies.get('auth') ? JSON.parse(cookies.get('auth')) : null;
  return (
    <div></div>
  )
}

export default AuthContextProvider