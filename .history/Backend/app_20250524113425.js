// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import { app , server } from './SocketIO/server.js'; // WebSocket server

dotenv.config();

const app = express(); // FIXED this line (you had express without ())

// Connect MongoDB
connectDb();

// Middleware
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/message', messageRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server 🧠');
});

// Start server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

export default app;
