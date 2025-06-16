import express from "express";
import { login, signUp } from '../controllers/user.controller.js';
const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login); // Assuming login uses the same controller for now
export default Router;