import express from "express";
import { login, logout, signUp,getAllUsers } from '../controllers/user.controller.js';
import Authmiddleware from "../midlewares/Auth.js";
const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);
Router.post("/logout", logout);
Router.get("/getallusers",Authmiddleware, getAllUsers);
 // Assuming login uses the same controller for now
 // Assuming login uses the same controller for now
export default Router;