import { useEffect } from 'react';
import { useSocketContext } from './socketContext';
import useConversation from '../components/zustand/useConversation';

const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => socket.off("newMessage", handleNewMessage);
    }, [socket, setMessages]);
};

export default useGetSocketMessage;
