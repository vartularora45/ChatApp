import { server } from "socket.io";
import http from "http"

import express from "express";


const app = express();

const server = http.createServer(app);


export const io = new server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});


export default { app, server, io };

