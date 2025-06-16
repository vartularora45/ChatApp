import express from "express";
import { signUp } from '../controllers/user.controller.js';
const Router = express.Router();

Router.post("/signup", signup);

export default Router;