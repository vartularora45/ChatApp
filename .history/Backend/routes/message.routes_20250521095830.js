import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import Authmiddleware from "../midlewares/Auth.js";
import {get}
const Router = express.Router();

Router.post('/send/:id',Authmiddleware, sendMessage);
Router.get('/get/:id', Authmiddleware, getMessages); // Assuming you have a getMessages function in your controller


export default Router;