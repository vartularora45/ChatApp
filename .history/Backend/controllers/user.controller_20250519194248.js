import User from "../db/user.model.js";
import bcrypt from "bcryptjs";
import { createdTokenAndSaveCookie } from "../jwt/generatetoken.js";
export const signUp = async (req,res) =>{
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

        // पहले user को save करें
        await newUser.save();
        
        // फिर token generate करें
        const token = createdTokenAndSaveCookie(newUser._id, res);
        console.log(token)
        console.log("User created successfully:", newUser);
        
        // सही response format
        res.status(201).json({
            user: newUser,
            message: "User created successfully",
            token: token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
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
        
        // Add debug logs
        console.log("Before token generation - User ID:", user._id);
        const token = createdTokenAndSaveCookie(user._id, res);
        console.log("After token generation - Token:", token);
        console.log("Cookies:", res.getHeaders()['set-cookie']);

        res.status(200).json({message: "Login successful", user, token});

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({message: "Internal Server Error"});
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


import jwt from 'jsonwebtoken';
import User from './models/User.js';

export const protect = async (req, res, next) => {
  let token;

  // Try to get token from header or cookies
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
