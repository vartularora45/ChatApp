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
            token: token
        });
        const token = createdTokenAndSaveCookie(newUser._id, res);

        await newUser.save();
       if(newUser) {
           
              console.log("Token created and cookie set");  
              console.log("User created successfully");
              console.log(token);
            res.status(201).json(newUser);
        }

       
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}

