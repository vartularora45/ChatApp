import React from "react";

const search = () => {
  return (
    <div className="flex-col flex items-center mt-2 justify-center h-16 shadow-md mt-12">
    
    <div class="flex items-center gap-3 ">
  
  <input
    type="text"
    placeholder="Search something..."
    class="w-72 px-4 py-2  rounded-full outline-none shadow-md placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
  />

 
  <button
    class="p-3 rounded-full bg-white text-blue-600 text-xl w-10 h-10  hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <i class="ri-search-line"></i>
  </button>
</div>

      

      
    </div>
    
  );
};

export default search;
