import User from "../db/user.model";
import bcrypt from "bcryptjs";

export  const signUp = async (req,res) =>{
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
            confirmPassword: hashedPassword
        });

        await newUser.save();
        const token = await newUser.generateAuthToken();
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 25892000000), // 30 days
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            sameSite: "strict" // Prevent CSRF attacks
        });
        console.log(token);

        res.status(201).json({message: "User created successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}


export default {