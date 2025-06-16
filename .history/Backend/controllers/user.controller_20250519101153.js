import User from "../db/user.model.js";
import bcrypt from "bcryptjs";
import { createdTokenAndSaveCookie } from "../jwt/generatetoken.js";
export   const signUp = async (req,res) =>{
    console.log(req.body);
    const {username, email, password, confirmPassword} = req.body
    try {
        if(!username || !email || !password || !confirmPassword) {
            return res.status(400).json({message: "All fields are required"});
        }
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
            
        });
        const token = createdTokenAndSaveCookie(newUser._id, res);

        await newUser.save();
       if(newUser) {
           
           
            res.status(201).json(newUser, {message: "User created successfully"},token);
        }

       
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}



export const login = async (req, res) => {


    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = createdTokenAndSaveCookie(user._id, res);
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
        
    } catch (error) {
        
    }
}