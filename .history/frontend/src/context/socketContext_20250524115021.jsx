import { createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContextProvider";
import io from "socket.io-client";

const socketContext = React.createContext();
export const socketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:3000", {
        query: {
          userId: user._id,
        },
      });
      
    }
  }, [user]);
};
