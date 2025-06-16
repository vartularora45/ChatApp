import { useState } from 'react';
import useConversation from '../components/zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();

  const sendMessage = async (messageContent) => {
    if (!selectedConversation?._id) {
      console.error('No conversation selected');
      return null;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedConversation._id}`,
        {
          message: messageContent,
        }
      );

      return response.data.message; // 🧠 Return data, don't update state

    } catch (error) {
      console.error('Failed to send message:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
