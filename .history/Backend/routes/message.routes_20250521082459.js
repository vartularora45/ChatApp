import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';

const Router = express.Router();

Router.post('/send/:id', sendMessage);



export default Router;