import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}));

// Example routes
import userRoutes from './routes/user.routes.js';
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// Example of a route
expo