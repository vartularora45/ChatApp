import { useState } from 'react';
import useConversation from '../components/zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (messageContent) => {
    if (!selectedConversation?._id) {
      console.error('No conversation selected');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedConversation._id}`,
        {
          content: messageContent,
        }
      );

      // Add the new message to messages list
      setMessages([...messages, response.data.message]);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
