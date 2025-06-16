import React, { createContext } from 'react'
import cookies from 'js-cookie'
import Cookies from 'js-cookie';
const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const initialUserState = Cookies.get('jwt') || localStorage.getItem('user');
  use
  return (
    <div></div>
  )
}

export default AuthContextProvider