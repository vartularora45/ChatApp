import React from "react";
import { useState } from "react";
import useSendMessage from "../../context/useSendMessage";
const TypeSend = () => {
     const [message,setMessage] = useState("")
     const { sendMessage, loading } = useSendMessage();
     

  return (
    <div>
      <div className="fixed bottom-0  right-0 w-[70%] ">
      <form action="
      "></form>
      </div>
    </div>
  );
};

export default TypeSend;
