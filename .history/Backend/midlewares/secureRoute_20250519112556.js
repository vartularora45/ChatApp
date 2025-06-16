import { verify } from "jsonwebtoken";

const secureRoute = (req, res, next) => {
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    
    
    
}