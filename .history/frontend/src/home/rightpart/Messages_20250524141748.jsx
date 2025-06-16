import React, { useEffect, useRef } from "react";
import Message from "./message";
import getMessages from "../../context/useGetMessage.jsx";
import Loading from "../../components/loading.jsx";

const Messages = () => {
  const { loading, messages = [] } = getMessages() || { messages: [] };

  // Ref to the last message DOM element
  const lastMsgRef = useRef(null);

  useEffect(() => {
    // Scroll into view ONLY if lastMsgRef.current exists
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // run effect every time messages change

  // Make sure messages is always an array
  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <div className="flex1 w-full h-[100%] overflow-y-scroll bg-slate-700 text-white p-4">
      {loading ? (
        <Loading />
      ) : safeMessages.length > 0 ? (
        safeMessages.map((message, index) => {
          // Attach ref ONLY to the last message
          const isLast = index === safeMessages.length - 1;
          return (
            <Message
              key={message._id}
              message={message}
              ref={isLast ? lastMsgRef : null} // Forward ref to last message
            />
          );
        })
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
