import React from "react";
import useConversation from "../../components/zustand/useConversation";

const ChatUsers = () => {
  const[ selectedConversation] = useConversation();
  console.log(selectedConversation)
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 shadow">
        <div className="flex items-center gap-3">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h2 className="text-white font-semibold text-sm">
              {selectedConversation.name}
            </h2>
            <span className="text-blue-400 text-l">Offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
