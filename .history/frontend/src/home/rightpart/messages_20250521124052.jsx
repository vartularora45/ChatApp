import React from "react";
import Message from "./message";
import getMessages from "../../context/useGetMessage.jsx";
const Messages = () => {
  const { loading, messages } = getMessages();
  return (
    <div className="flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4">
      {!loading && messages && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center space-y-2 font-3xl">
          <p className="text-3xl font-bold">📭 No Messages Yet</p>
          <p className="text-lg text-gray-300">
            👋 Say hi to start the conversation!
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
