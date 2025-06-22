import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser'; // <-- Import cookie-parser
dotenv.config();
const app = express();

connectDb();
app.use(cookieParser());           // <-- Use cookie-parser middleware





// 👇 Isko add kar de before routes


const allowedOrigins = [
  "http://localhost:5173",
  "https://chat-app-cyan-ten-50.vercel.app",
  "https://chatuapp.me",
  "https://www.chatuapp.me"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed from this origin: " + origin));
      }
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]** // 🔥 THIS IS THE FIX
  })
);




                    // <-- Move cors here
app.use(express.json());            // <-- move JSON parser here
app.use(express.urlencoded({ extended: true })); // <-- and URL-encoded parser here

app.use('/api/users', userRoutes); // <-- routes after middlewares
app.use("/api/message", messageRoutes); // <-- routes after middlewares

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});

export default app;
