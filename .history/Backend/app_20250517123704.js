import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
dotenv.config();
const app = express();
connectDb();
app.use('/api/users', userRoutes);
app.use(cors());                    // First, enable CORS globally
app.use(express.json());            // Then parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse urlencoded requests

app.use('/api/users', userRoutes); // Now add your routes, after middlewares



app.get('/',(req,res)=>{
    res.send('Welcome to the backend server');
})


export default app;