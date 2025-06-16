import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const TypeSend = () => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => {
      setShowInput(true);
    }, 100); // slight delay for animation
  }, []);

  return (
    <div className="w-full">
      <div className="fixed bottom-0 right-0 w-full md:w-[70%] px-4 z-50">
        <div
          className={`transition-all duration-500 ease-out transform ${
            showInput ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center bg-[#1E293B] px-4 py-3 gap-2 rounded-t-2xl shadow-xl">
            {/* Input Box */}
            <input
              type="text"
              placeholder="Type here"
              className="flex-1 bg-[#0F172A] text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none"
            />

            {/* Send Button */}
            <button className="bg-[#334155] hover:bg-[#475569] text-white p-3 rounded-full transition duration-200 hover:scale-110">
              <i className="ri-send-plane-2-fill text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeSend;
