import React from "react";

const Message = ({message}) => {


  const authUser = JSON.parse(localStorage.getItem("user"));
  const itzme = message.senderId === authUser.user._id;
  const chatName = itzme ? "chat-end" : "chat-start";
  
  return (
    <div>
      <div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-accent">
            {message.message}
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning">
            To be on the Council at your age.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
