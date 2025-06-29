import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import axios from "axios";
import API from "../api";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, addMessage } = useConversation();

  const sendMessage = async (messageText) => {
    if (!selectedConversation || !messageText) return;

    setLoading(true);
    console.log(selectedConversation._id)
    try {
      const { data } = await API.post(
      `/api/message/send/${selectedConversation._id}`,
      { message: messageText }
    );

      // success response => zustand me daal do
      addMessage(data.data);
    } catch (error) {
      console.error("Message bhejne me error aaya:", error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
