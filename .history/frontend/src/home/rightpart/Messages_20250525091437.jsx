import React, { useEffect, useRef } from "react";
import Message from "./Message";
import getMessages from "../../context/useGetMessage.jsx";
import Loading from "../../components/loading.jsx";

const Messages = () => {
  const { loading, messages = [] } = getMessages() || { messages: [] };
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  

  useEffect(() => {
    // Scroll to bottom when messages change
    const timer = setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        // Alternative:
        // containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [messages]);

  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <div 
      ref={containerRef}
      className="flex-1 w-full h-full overflow-y-auto bg-slate-700 text-white p-4"
    >
      {loading ? (
        <Loading />
      ) : safeMessages.length > 0 ? (
        <>
          {safeMessages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      ) : (
        <div className="text-center text-white text-4xl mt-[20%] space-y-2">
          <p>📭 No Messages Yet</p>
          <p>👋 Say hi to start the conversation!</p>
        </div>
      )}
    </div>
  );
};

export default Messages;