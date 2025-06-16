import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContextProvider";
import io from "socket.io-client";
import React, { useState } from "react";
const socketContext = React.createContext();


export const 
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();
   const[onlineUsers,setOnlineUsers] = useState([]);

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:3000", {
        query: {
          userId: user._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers",(users)=>{
          setOnlineUsers(users)
      })
      return () => {
      socket.close();
    };
    }
    else{
        if(socket){
            socket.close();
            setSocket(null);
        }
    }
    
  }, [user]);


  return (
    <socketContext.Provider value={{socket,onlineUsers}}>
      {children}
    </socketContext.Provider>
  );
};
