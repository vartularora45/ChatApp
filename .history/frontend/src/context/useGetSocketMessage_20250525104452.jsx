import { useEffect } from "react";
import { useSocketContext } from "./socketContext";
import useConversation from "../components/zustand/useConversation";
import sound from "../assets/sound.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { addMessage } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      const notification = new Audio(sound);
      notification.volume = 1;
      <notification className="time"></notification>
      notification.play().catch((err) => {
        console.warn("🔇 Unable to play sound. Likely autoplay blocked:", err);
      });

      addMessage(newMessage);
    };

    socket.on("newMessage", handleNewMessage);

    return () => socket.off("newMessage", handleNewMessage);
  }, [socket, addMessage]);
};

export default useGetSocketMessage;
