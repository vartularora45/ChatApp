// SocketIO/socket.js

import { Server } from 'socket.io';

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // frontend
      credentials: true,
    },
  });
  export const getRecieverSocketId = ()=>{
    
  }

  const users = {};
  
  io.on('connection', (socket) => {
    console.log("🔌 New client connected:", socket.id);
    const userId = socket.handshake.query.userId; // Assuming you're passing the user ID in the query parameter
    if(userId){
       users[userId] = socket.id;
       console.log("hello", users);
    }
    io.emit("getOnlineUsers",Object.keys(users));



    

    socket.on('disconnect', () => {
      console.log("❌ Client disconnected:", socket.id);
      delete users[userId];
      io.emit("getOnlineUsers",Object.keys(users));
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};
