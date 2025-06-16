import React from "react";
import useConversation from "../../components/zustand/useConversation.jsx";
import { useSocketContext } from "../../context/socketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket, onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(user._id);
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      className={`flex items-center justify-between px-6 py-4 hover:bg-gray-700 ${
        isSelected ? "bg-gray-700" : ""
      } cursor-pointer transition-colors duration-300`}
      onClick={() => setSelectedConversation(user)}
    >
      {/* Avatar + Green Dot */}
      <div className="relative w-12 h-12">
        <img
          src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
          className="w-12 h-12 rounded-full object-cover"
          alt="profile"
        />
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>

      {/* Username & Email */}
      <div className="ml-6 flex-1 text-left">
        <h1 className="text-white font-semibold">{user.username}</h1>
        <h2 className="text-gray-400 text-sm">{user.email}</h2>
      </div>
    </div>
  );
};

export default User;
