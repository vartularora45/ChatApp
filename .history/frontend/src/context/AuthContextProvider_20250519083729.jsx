import React, { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const initialUserState = Cookies.get('jwt') || localStorage.getItem('user');
  const [user, setUser] = useState(() => {
    try {
      return initialUserState ? JSON.parse(initialUserState) : null;
    } catch (e) {
      console.error("Invalid JSON in storage:", e);
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
