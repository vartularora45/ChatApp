import express from "express";
import { signUp } from "../cantrollers/user.cantroller";

const Router = express.Router();

Router.post("/signup", signUp);

