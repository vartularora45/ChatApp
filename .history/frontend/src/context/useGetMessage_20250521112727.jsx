import React from "react";
import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import { useEffect } from "react";
import axios from "axios";

const useGetMessage = () => {
  const { loading, setLoading } = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      if (selectedConversation && selectedConversation._id) {
        try {
          const response = axios.get(
            `http://localhost:3000/api/message/send/${selectedConversation._}`
          );
          setMessages(response.data);

          setMessages(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMessages();
  }, []);

  return <div>useGetMessage</div>;
};

export default useGetMessage;
