import React, { createContext } from 'react'
import cookies from 'js-cookie'
import Cookies from 'js-cookie';
const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const initialState = Cookies.get('jwt') || localStorage.getItem('jwt') || localStorage.getItem('token') || cookies.get('jwt') || cookies.get('token');.get
  return (
    <div></div>
  )
}

export default AuthContextProvider