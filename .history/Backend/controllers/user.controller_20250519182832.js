import User from "../db/user.model.js";
import bcrypt from "bcryptjs";
import { createdTokenAndSaveCookie } from "../jwt/generatetoken.js";



export const login = async (req, res) => {


    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    try {
        const user = await User.findOne({email});
        console.log(user)
        if(!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = createdTokenAndSaveCookie(user._id, res);
        console.log("User logged in successfully:", user);
        res.status(200).json({message: "Login successful", user, token});


    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
        
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({message: "Logout successful"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}


export const getAllUsers = async (req, res) => {
    try {
       const loggedInUser = req.user._id;
         const users = await User.find({_id: {$ne: loggedInUser}}).select("-password -confirmPassword");
        res.status(200).json(users);

        console.log("Fetched all users except the logged-in user:", users);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}