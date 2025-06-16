import { useState } from "react";
import useConversation from "../components/zustand/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast"; // Consider adding toast notifications

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    // Validate input more thoroughly
    if (typeof message !== "string" || message.trim() === "") {
      console.error("Invalid message content");
      return;
    }

    if (!selectedConversation?.id) {
      console.error("No conversation selected");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/message/send/${selectedConversation.id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
            // Add authorization header if needed
            // "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true // If using cookies
        }
      );

      if (!response.data?.message) {
        throw new Error("Invalid response format");
      }

      const newMessage = response.data.message;

      // Optimistic UI update - update immediately, revert if error
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Optional: Show success feedback
      // toast.success("Message sent");

    } catch (error) {
      console.error("Failed to send message:", error);
      
      // Revert optimistic update in case of error
      setMessages((prevMessages) => [...prevMessages]);
      
      // Show user-friendly error message
      const errorMsg = error.response?.data?.message || 
                      error.message || 
                      "Failed to send message";
      // toast.error(errorMsg);
      
      // Consider rethrowing if you want components to handle errors
      // throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;