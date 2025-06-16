// server.js
import http from 'http';
import app from './app.js';
import { initSocket } from './SocketIO/socket.js'; // 👈 import socket

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Initialize socket.io on same server
initSocket(server);

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
