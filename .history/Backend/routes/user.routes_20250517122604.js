import express from "express";

const Router = express.Router();

Router.post("/signup", signUp);

export default Router;