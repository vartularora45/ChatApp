import React, { useEffect, useRef } from "react";
import Message from "./message";
import getMessages from "../../context/useGetMessage.jsx";
import Loading from "../../components/loading.jsx";

const Messages = () => {
  // Destructure with default empty array for messages
  const { loading, messages = [] } = getMessages() || { messages: [] };
   const lastMsgRef = useRef()
   useEffect(()=>{
     setTimeout
   })
  // Ensure messages is always an array
  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <div className="flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4">
      {loading ? (
        <Loading />
      ) : safeMessages.length > 0 ? (
        safeMessages.map((message) => (
          <Message key={message._id} message={message} />
        ))
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