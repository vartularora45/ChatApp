import express from 'express';
import { deleteMessage, sendMessage } from '../controllers/message.controller.js';
import Authmiddleware from "../midlewares/Auth.js";
import { getMessages } from '../controllers/message.controller.js';
const Router = express.Router();

Router.post('/send/:id',Authmiddleware, sendMessage);
Router.get('/get/:id', Authmiddleware, getMessages); // Assuming you have a getMessages function in your controller
Router.delete('/delete/:id/:id',Authmiddleware,deleteMessage);


export default Router;