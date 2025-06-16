import React from "react";
import useConversation from "../../components/zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";
import { useAuth } from "../../context/AuthContextProvider";

const ChatUsers = () => {
  const { selectedConversation } = useConversation();
  const { user } = useAuth();
  const { onlineUsers } = useSocketContext();

  // Check if the selected conversation user is online
  const isOnline = selectedConversation?._id 
    ? onlineUsers.includes(selectedConversation._id)
    : false;
    setTimeout

  return (
    <div className="border-b border-gray-700">
      <div className="flex items-center justify-between bg-gray-900 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={selectedConversation?.profilePic || "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"}
            alt={selectedConversation?.username || "User"}
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h2 className="text-white font-semibold">
              {selectedConversation?.username || "Unknown User"}
            </h2>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></span>
              <span className="text-xs text-gray-300">
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;