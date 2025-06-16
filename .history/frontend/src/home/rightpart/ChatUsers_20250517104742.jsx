import React from "react";

const ChatUsers = () => {
  return (
    <div
     >
        <div className="flex flex-col gap-2 p-4 overflow-y-auto h-[80vh] bg-[#0F172A] text-white">
  {/* Incoming message */}
  <div className="self-start max-w-xs bg-[#1E293B] px-4 py-2 rounded-xl rounded-bl-none text-sm shadow">
    <p>what r u doing vikash?</p>
    <span className="text-xs text-gray-400 mt-1 block text-right">11:11 PM</span>
  </div>

  {/* Outgoing message */}
  <div className="self-end max-w-xs bg-blue-600 px-4 py-2 rounded-xl rounded-br-none text-sm shadow">
    <p>working in a project</p>
    <span className="text-xs text-gray-200 mt-1 block text-right">11:12 PM</span>
  </div>

  {/* Incoming again */}
  <div className="self-start max-w-xs bg-[#1E293B] px-4 py-2 rounded-xl rounded-bl-none text-sm shadow">
    <p>ok can u please tell about something</p>
    <span className="text-xs text-gray-400 mt-1 block text-right">11:12 PM</span>
  </div>

  <div className="self-start max-w-xs bg-[#1E293B] px-4 py-2 rounded-xl rounded-bl-none text-sm shadow">
    <p>regarding your project</p>
    <span className="text-xs text-gray-400 mt-1 block text-right">11:12 PM</span>
  </div>

  {/* Outgoing again */}
  <div className="self-end max-w-xs bg-blue-600 px-4 py-2 rounded-xl rounded-br-none text-sm shadow">
    <p>not now, will do once completed.</p>
    <span className="text-xs text-gray-200 mt-1 block text-right">11:12 PM</span>
  </div>
</div>

    </div>
  );
};

export default ChatUsers;
