import React from "react";

const TypeSend = () => {
  return (
    <div>
      <div
      className=""
      >
        <div className="flex items-center bg-[#1E293B] px-4 py-3 gap-2">
          {/* Input Box */}
          <input
            type="text"
            placeholder="Type here"
            className="flex-1 bg-[#0F172A] text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none"
          />

          {/* Send Button */}
          <button className="bg-[#334155] hover:bg-[#475569] text-white p-2 rounded-full transition duration-150 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeSend;
