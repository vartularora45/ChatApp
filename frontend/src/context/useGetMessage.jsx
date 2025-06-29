import { useState, useEffect } from 'react';
import useConversation from '../components/zustand/useConversation';
import axios from 'axios';
import API from '../api';
const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      console.log('Fetching messages for:', selectedConversation._id);
      setLoading(true);

      try {
        const response = await API.get(
          `/api/message/get/${selectedConversation._id}`
        );
        console.log(response);

        setMessages(response.data.messages);
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
