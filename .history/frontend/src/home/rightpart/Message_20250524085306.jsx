import React from "react";

const Message = ({message}) => {


  const authUser = JSON.parse(localStorage.getItem("user"));
  console.log(authUser)
  const itzme = message.senderId === authUser._id;
  
  const chatName = itzme ? "chat-end" : "chat-start";
  const chatColor = itzme ? "bg-accent" : "bg-warning";
  console.log(message.message);
  
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
