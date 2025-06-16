import { createContext, useContext } from "react";




const socketContext = React.createContext();
export const socketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const {user} = useContext
};