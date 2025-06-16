import React from "react";

const Message = ({message}) => {


  const authUser = JSON.parse(localStorage.getItem("user"));
  const itzme = message.senderId === authUser.user._id;
  const chatName = itzme ? "chat-end" : "chat-start";
  const chatColor = itzme ? "bg-accent" : "bg-warning";
  
  return (
    <div>
      <div>
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white  ${chatColor}`}>
            {message.message}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Message;
