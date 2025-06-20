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
      const socket = io("Failed to load resource: the server responded with a status of 401 (Unauthorized)Understand this error
index-vBG0Zkup.js:54 Error fetching data: le
(anonymous) @ index-vBG0Zkup.js:54Understand this error
chatapp-no4t.onrender.com/api/users/getallusers:1 
            
            
           Failed to load resource: the server responded with a status of 401 (Unauthorized)Understand this error
index-vBG0Zkup.js:54 Error fetching data: le
(anonymous) @ index-vBG0Zkup.js:54Understand this error
index-vBG0Zkup.js:77 getAllUser Array(0)
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=u9jgfnh1:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=u9lxnudh:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=u9pt7td9:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=u9v6nmds:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=ua1cv0xa:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=ua7jcv0e:1 
            
            
           Failed to load resource: net::ERR_CONNECTION_REFUSEDUnderstand this error
index-vBG0Zkup.js:77 
            
            
           GET http://localhost:3000/socket.io/?userId=6855604832abac23b3b7809f&EIO=4&transport=polling&t=uadhisma net::ERR_CONNECTION_REFUSED
_create @ index-vBG0Zkup.js:77
ju @ index-vBG0Zkup.js:77
request @ index-vBG0Zkup.js:77
doPoll @ index-vBG0Zkup.js:77
_poll @ index-vBG0Zkup.js:77
doOpen @ index-vBG0Zkup.js:77
open @ index-vBG0Zkup.js:77
_open @ index-vBG0Zkup.js:77
zn @ index-vBG0Zkup.js:77
qb @ index-vBG0Zkup.js:77
Hb @ index-vBG0Zkup.js:77
open @ index-vBG0Zkup.js:77
(anonymous) @ index-vBG0Zkup.js:77Understand this error", {
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
