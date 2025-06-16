import React, { useState, useEffect, useRef } from "react";
import useSendMessage from "../../context/useSendMessage.jsx";
import useConversation from "../../components/zustand/useConversation";
import { toast } from "react-hot-toast";

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const { messages, setMessages } = useConversation();
  const inputRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    try {
      const newMessage = await sendMessage(trimmedMessage);
      if (newMessage) {
        // Update messages immediately after successful send
        setMessages([...messages, newMessage]);
      }
      setMessage(""); // Clear input only after successful send
      inputRef.current?.focus();
    } catch (error) {
      toast.error(error.message || "Failed to send message");
    }
  };

  // ...rest of your component code
};