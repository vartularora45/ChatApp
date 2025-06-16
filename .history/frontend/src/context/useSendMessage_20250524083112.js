import { useState } from "react";
import useConversation from "./useConversation"; // jahan tu zustand store rakh raha

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, addMessage } = useConversation();

  const sendMessage = async (messageText) => {
    if (!selectedConversation || !messageText) return;

    setLoading(true);
    try {
      const res = await fetch("/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverId: selectedConversation._id,
          message: messageText,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // agar backend sahi response de raha
        addMessage(data); // zustand me message add kar
      } else {
        console.error("Error sending message:", data.error);
      }
    } catch (err) {
      console.error("Failed to send message:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
