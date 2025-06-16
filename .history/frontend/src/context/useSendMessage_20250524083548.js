import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, addMessage } = useConversation();

  const sendMessage = async (messageText) => {
    if (!selectedConversation || !messageText) return;

    setLoading(true);

    try {
      const { data } = await axios.post("/api/message/send", {
        receiverId: selectedConversation._id,
        message: messageText,
      });

      // success response => zustand me daal do
      addMessage(data);
    } catch (error) {
      console.error("Message bhejne me error aaya:", error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
