import React, { createContext } from 'react'
import cookies from 'js-cookie'
import Cookies from 'js-cookie';
const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const initialState = Cookies.get('jwt') || 
  return (
    <div></div>
  )
}

export default AuthContextProvider