import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import Authmiddleware from "../midlewares/Auth.js";

const Router = express.Router();

Router.post('/send/:id',Authmiddleware, sendMessage);



export default Router;