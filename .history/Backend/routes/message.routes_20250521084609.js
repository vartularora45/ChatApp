import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import { Authmiddleware } from '../middlewares/auth.middleware.js';
const Router = express.Router();

Router.post('/send/:id',secureRoute, sendMessage);



export default Router;