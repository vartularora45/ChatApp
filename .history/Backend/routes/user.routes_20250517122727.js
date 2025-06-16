import express from "express";
import { } from '../controllers/user.controller.js';
const Router = express.Router();

Router.post("/signup", signUp);

export default Router;