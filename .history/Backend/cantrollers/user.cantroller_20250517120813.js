import User from "../db/user.model";


export const signUp = async (req,res) =>{
    const {username, email, password, confirmPassword} = req.body
    try {
        if(!username || !email || !password || !confirmPassword) {
            return res.status(400).json({message: "All fields are required"});
        }
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }
        const existingUser = await User
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}