import React from "react";
import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import { useEffect } from "react";
import axios from "axios";
import loading from "../components/loading";
// import { getMessages } from "../../../Backend/controllers/message.controller";

const useGetMessage = () => {
  const loading, setLoading } = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      if (selectedConversation && selectedConversation._id) {
        try {
          const response = axios.get(
            `http://localhost:3000/api/message/send/${selectedConversation._id}`
          );
          setMessages(response.data);

          setMessages(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMessages();
  }, [selectedConversation,setMessages]);
    return {loading,messages};
};

export default useGetMessage;
