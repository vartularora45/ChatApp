import React from "react";

const search = () => {
  return (
    <div className="flex-col flex items-center justify-center h-16 shadow-md mt-12">
    
    <div class="bg-blue-600 p-6 flex items-center justify-center min-h-screen">
  <div class="flex items-center gap-3">
    <!-- Search Bar -->
    <input
      type="text"
      placeholder="Search something..."
      class="w-72 px-4 py-2 rounded-full outline-none shadow-lg placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-white"
    />

    <!-- Animated Icon -->
    <button
      class="p-3 rounded-full bg-white text-blue-600 text-2xl shadow-lg transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-blue-400 animate-pulse"
    >
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
