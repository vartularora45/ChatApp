import { useState } from 'react';
import useConversation from '../components/zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
   

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedConversation.id}`,
        {
          
        }
      );


      // Add the new message to the messages array
      setMessages([...messages, response.data.message]);
      setLoading(false);
    } catch (error) {
      console.error('Failed to send message:', error);
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
