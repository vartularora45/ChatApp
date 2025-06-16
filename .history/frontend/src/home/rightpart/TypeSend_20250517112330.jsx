import React from "react";

const TypeSend = () => {
  return (
    <div>
      <div
      className="fixed bottom-0  right-0 w-[70%]"
      >
        <div className="flex items-center  px-2 py-5 gap-2">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Type here"
            className="flex-1 bg-[#0F172A] text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none"
          />

          {/* Send Button */}
          <button className="bg-[#334155] hover:bg-[#475569] text-white p-2 rounded-full transition duration-150 ease-in-out">
            <i class="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeSend;
