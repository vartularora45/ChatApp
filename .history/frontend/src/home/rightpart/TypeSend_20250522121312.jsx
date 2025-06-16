import React, { useState } from "react";
import useSendMessage from "../../context/useSendMessage";
import useConversation from "../components/zustand/useConversation";

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const { setMessages } = useConversation();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = await sendMessage(message.trim());
    if (newMessage) {
      setMessages(prev => [...prev, newMessage]); // ✅ update shared state here
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-[70%]">
      <form onSubmit={handleSend}>
        <div className="flex items-center bg-gray-900 px-2 py-7 gap-2">
          <input
            type="text"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 text-white bg-gray-800 px-4 py-2 rounded-full outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-white text-blue-600 text-xl w-10 h-10"
            disabled={loading}
          >
            <i className="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TypeSend;
