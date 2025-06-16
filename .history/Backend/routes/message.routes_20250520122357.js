import express from 'express';
import { sendMessage } from '../controllers/message.controller';

const Router = express.Router();

Router.post('/send/:', sendMessage);



export default Router;