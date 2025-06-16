import React from "react";
import Message from "./message";
import getMessages from "../../context/useGetMessage.jsx";
import Loading from "../../components/loading.jsx";

const Messages = () => {
  const { loading, messages = [] } = getMessages() || {};

  return (
    <div className="flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4">
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <div className="text-center text-white text-4xl mt- space-y-2">
          <p>📭 No Messages Yet</p>
          <p>👋 Say hi to start the conversation!</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
