import React from "react";

const search = () => {
  return (
    <div className="flex-col flex items-center justify-center h-16 shadow-md mt-12">
    <div class="bg-blue-600 p-4 flex items-center justify-center min-h-screen">
  <div class="flex items-center bg-white rounded-full px-4 py-2 w-72 transition-all duration-300 shadow-md focus-within:ring-2 focus-within:ring-blue-400 group">
    <input
      type="text"
      placeholder="Search here..."
      class="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 transition-all duration-300 focus:placeholder-opacity-0"
    />
    <button class="ml-2 text-blue-600 text-xl transition-transform duration-300 group-focus-within:rotate-12">
      <i class="ri-search-line"></i>
    </button>
  </div>
</div>

      

      <div
        className="mt-2 text-white text-2xl font-bold bg-red-300 w-full">
        <h1 className="px-4 py-2 text-white flex align-center font-bold">MESSAGES</h1>
      </div>
    </div>
    
  );
};

export default search;
