import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    if (!message || !selectedConversation?.id) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedConversation.id}`,
        { message }
      );

      const newMessage = response.data.message;

      // Safe way to update messages (in case of concurrent updates)
      setMessages((prevMessages) => [...prevMessages, newMessage]);

    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
