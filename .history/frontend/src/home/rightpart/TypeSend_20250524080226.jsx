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
  // Handle Enter key press (but allow Shift+Enter for new lines)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-[70%] bg-gray-900 border-t border-gray-700">
      <form onSubmit={handleSend} className="w-full">
        <div className="flex items-center px-4 py-3 gap-2">
          {/* Input Box */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 text-white placeholder-gray-400 px-4 py-3 rounded-full outline-none bg-gray-800 focus:ring-2 focus:ring-blue-500"
            disabled={loading}
            aria-label="Message input"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading || !message.trim()}
            aria-label="Send message"
            className={`p-2 rounded-full text-xl w-12 h-12 flex items-center justify-center shadow-md transition-all duration-200 ${
              loading
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : message.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="loading-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            ) : (
              <i className="ri-send-plane-2-fill"></i>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TypeSend;