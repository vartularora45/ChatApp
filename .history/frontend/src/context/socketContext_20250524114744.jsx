import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContextProvider";
import io fron 'socket.io-client'
import React from 'react';
import { useState } from "react";



const socketContext = React.createContext();
export const socketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const {user} = useAuth();

    useEffect(()=>{
        if(user){
            const socket 
        }
    })
};