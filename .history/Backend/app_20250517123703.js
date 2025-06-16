import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
dotenv.config();
const app = express();
connectDb();
app.use('/api/users', userRoutes);



app.get('/',(req,res)=>{
    res.send('Welcome to the backend server');
})


export default app;