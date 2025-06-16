import React from "react";

const search = () => {
  return (
    <div className="flex-col flex items-center justify-center h-16 shadow-md mt-8">
      <div class="flex items-center border border-gray-300 rounded-full px-4 py-2 w-76 transition-all duration-300 focus-within:shadow-md focus-within:border-blue-500">
        <i class="ri-search-line text-gray-500 text-xl mr-2 transition-transform duration-300 group-focus-within:scale-110"></i>
        <input
          type="text"
          placeholder="Search..."
          class="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 focus:placeholder-opacity-0 transition-all duration-300"
        />
      </div>
      <div
        className="mt-8 text-white text-2xl font-bold bg-red-300">
        <h1 className="px-4 py-2 text-white flex align-center">MESSAGES</h1>
      </div>
    </div>
    
  );
};

export default search;
