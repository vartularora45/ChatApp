import React, { useState } from "react";
import useGetAllUsers from "../../context/getAllUser"; // make sure this returns users array
import useConversation from "../../components/zustand/useConversation";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { users = [] } = useGetAllUsers(); // ✅ Default to empty array to avoid undefined crash
  const { setSelectedConversation } = useConversation();

  const filteredUsers = users.filter((user) =>
    user.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-col flex items-center justify-center mt-6 relative">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search users..."
          className="w-72 px-4 py-2 rounded-full outline-none shadow-md placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="p-3 rounded-full bg-white text-blue-600 text-xl w-10 h-10 hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <i className="ri-search-line"></i>
        </button>
      </div>

      {searchTerm && (
        <div className="absolute top-16 w-80 bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto z-10">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="p-3 hover:bg-blue-100 cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedConversation(user);
                  setSearchTerm(""); // reset search bar
                }}
              >
                {user.username}
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No users found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
