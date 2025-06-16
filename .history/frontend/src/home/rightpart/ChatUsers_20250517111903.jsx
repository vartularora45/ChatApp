import React from "react";

const ChatUsers = () => {
  return (
    <div>
        <div className="flex items-center justify-between bg-gray-700 px-4 py-2 shadow">
  <div className="flex items-center gap-3">
    <img
      src="https://via.placeholder.com/40" 
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover border-2 border-white"
    />
    <div>
      <h2 className="text-white font-semibold text-sm">Vikash</h2>
      <span className="text-blue-400 text-xs">Offline</span>
    </div>
  </div>

</div>

    </div>
  );
};

export default ChatUsers;
