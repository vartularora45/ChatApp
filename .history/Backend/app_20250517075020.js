import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();


app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.length('')