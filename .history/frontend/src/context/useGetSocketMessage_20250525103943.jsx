import { useEffect } from 'react';
import { useSocketContext } from './socketContext';
import useConversation from '../components/zustand/useConversation';
import sound from '../assets/sound.mp3'; 
const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { addMessage } = useConversation();
    
    useEffect(() => {
        if (!socket) return;
        
        const handleNewMessage = (newMessage) => {
            addMessage(newMessage); // ✅ Properly adds message without duplicates
        };
        const notification = new Audio(sound)
        no

        socket.on("newMessage", handleNewMessage);

        // Cleanup to prevent multiple listeners
        return () => socket.off("newMessage", handleNewMessage);
    }, [socket, addMessage]);
};

export default useGetSocketMessage;
