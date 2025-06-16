import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';

import cookieParser from 'cookie-parser'; // <-- Import cookie-parser
dotenv.config();
const app = express();

connectDb();
app.use(cookieParser());           // <-- Use cookie-parser middleware
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
     
}));                    // <-- Move cors here
app.use(express.json());            // <-- move JSON parser here
app.use(express.urlencoded({ extended: true })); // <-- and URL-encoded parser here

app.use('/api/users', userRoutes); // <-- routes after middlewares

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});

export default app;
