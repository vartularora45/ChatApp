import User from "../db/user.model";


export const signUp = async (req,res) =>{
    const {username, email, password, confirmPassword} = req.body
    try {
        if()
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.log(error);
    }
}