import React from "react";

const search = () => {
  return (
    <div className="flex-col flex items-center justify-center h-16 shadow-md mt-12">
      <div class="flex items-center border border-gray-300 rounded-full px-4 py-2 w-78 transition-all duration-300 focus-within:shadow-md focus-within:border-blue-500">
       
        <input
          type="text"
          placeholder="Search..."
          class="outline-none bg-transparent w-full  placeholder-gray-400 focus:placeholder-opacity-0 transition-all duration-300"
        />
       
      </div>
      

      <div
        className="mt-2 text-white text-2xl font-bold bg-red-300 w-full">
        <h1 className="px-4 py-2 text-white flex align-center font-bold">MESSAGES</h1>
      </div>
    </div>
    
  );
};

export default search;
