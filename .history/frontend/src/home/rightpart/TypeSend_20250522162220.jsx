import React, { useState } from "react";
import useSendMessage from "../../context/useSendMessage";

const TypeSend = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSend = async (e) => {
    e.preventDefault();

    if (!message.trim()) return; // don't send empty messages

    await sendMessage(message.trim());
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 right-0 w-[70%]">
      <form onSubmit={handleSend}>
        <div className="flex items-center bg-gray-900 px-2 py-7 gap-2">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none bg-gray-800"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className={`p-2 rounded-full text-xl w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 ${
              loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-600 hover:bg-blue-100 focus:ring-blue-400"
            }`}
          >
            <i className="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TypeSend;
