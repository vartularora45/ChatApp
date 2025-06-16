import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();


app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send('Welcome to the backend server');
})


export default app;