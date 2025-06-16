import express from "express";



const Router = express.Router();


Router.get("/", (req, res) => {
    res.send("Welcome to the user routes");
}