import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContextProvider";
import io fron soc



const socketContext = React.createContext();
export const socketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const {user} = useAuth();

    useEffect(()=>{
        if(user){
            const socket 
        }
    })
};