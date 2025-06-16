import React from "react";
import { useState } from "react";
import useSendMessage from "../../context/useSendMessage";
const TypeSend = () => {
     const [message,setMessage] = useState("")
     const { sendMessage, loading } = useSendMessage();
     const handleSend = async(e)=>{
        e.preventDefault();
        if(message.length>0){
            await sendMessage(message);
            setMessage("");
        }
     }

  return (
    <div>
      <div className="fixed bottom-0  right-0 w-[70%] ">
      <form onSubmit={handleSend}>
          <div className="flex items-center bg-gray-900 px-2 py-7 gap-2">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            
            className="flex-1  text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none"
          />

          {/* Send Button */}
          <button class="p-2  rounded-full bg-white text-blue-600 text-xl w-10 h-10  hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <i class="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default TypeSend;
