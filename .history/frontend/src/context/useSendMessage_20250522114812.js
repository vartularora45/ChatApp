import { useState, useEffect } from 'react';
import useConversation from '../components/zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const sendMessages = async () => {
      if (!selectedConversation?._id) return;

      console.log('Fetching messages for:', selectedConversation._id);
      setLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:3000/api/message/get/${selectedConversation._id}`
        );
        console.log(response);

        sendMessages(response.data.messages);
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    sendMessages();
  }, [selectedConversation, ]);

  return { loading, messages };
};

export default useGetMessage;
