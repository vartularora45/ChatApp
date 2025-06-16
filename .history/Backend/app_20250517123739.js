import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();

connectDb();

app.use(cors());                    // <-- Move cors here
app.use(express.json());            // <-- move JSON parser here
app.use(express.urlencoded({ extended: true })); // <-- and URL-encoded parser here

app.use('/api/users', userRoutes); // <-- routes after middlewares

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});

export default app;
