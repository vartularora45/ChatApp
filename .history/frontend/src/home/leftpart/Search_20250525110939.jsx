import React, { useState } from "react";
import useConversation from "../../components/zustand/useConversation";
import useGetAllUsers from "../../context/getAllUser";

const search = () => {

  const {search,setSearch} = useState("");
  const { setSelectedConversation } =useConversation();
  const {getAllUser} = useGetAllUsers();

  return (
    <div className="flex-col flex items-center  justify-center h-16 shadow-md mt-6">
      <div class="flex items-center gap-3 ">
       <form onSubmit={handle}>
         <input
          type="text"
          placeholder="Search something..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          class="w-72 px-4 py-2  rounded-full outline-none shadow-md placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
        />

        <button class="p-3 rounded-full bg-white text-blue-600 text-xl w-10 h-10  hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <i class="ri-search-line"></i>
        </button>
       </form>
      </div>
    </div>
  );
};

export default search;
