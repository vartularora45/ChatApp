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

  const users = {};

  io.on('connection', (socket) => {
    console.log("🔌 New client connected:", socket.id);
    const userId = socket.handshake.query.userId; // Assuming you're passing the user ID in the query parameter
    if(userId){
       users[userId] = socket.id;
       console.log());
    } else {
      console.error("❌ User ID not found!");
      return;
    }


    console.log("User ID:", userId);
    socket.on('sendMessage', (message) => {
      console.log("📨 Message:", message);
      socket.broadcast.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
      console.log("❌ Client disconnected:", socket.id);
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
