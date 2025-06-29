import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContextProvider";
import io from "socket.io-client";
import React, { useState } from "react";
const socketContext = React.createContext();


export const useSocketContext = ()=>{
    return useContext(socketContext);
}
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();
   const[onlineUsers,setOnlineUsers] = useState([]);

  useEffect(() => {
    if (user) {
      const socket = io("https://chatapp-no4t.onrender.com", {
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
