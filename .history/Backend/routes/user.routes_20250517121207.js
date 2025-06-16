import express from "express";



const Router = express.Router();


Router.get("/", (req, res) => {
    res.send("Welcome to the user routes");
});
Router.get("/profile", (req, res) => {
    res.send("User profile route");
});