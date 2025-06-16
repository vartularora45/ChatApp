import React, { createContext } from 'react'
import cookies from 'js-cookie'
import Cookies from 'js-cookie';
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const initialUserState = Cookies.get('jwt') || localStorage.getItem('user');
  const [user, setUser] = React.useState(initialUserState ? JSON.parse(initialUserState) : null);
  return 
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
}

export const useAuth = ()