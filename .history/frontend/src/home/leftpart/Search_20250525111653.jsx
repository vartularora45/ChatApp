import React, { useState, useEffect } from "react";
import useConversation from "../../components/zustand/useConversation";
import useGetAllUsers from "../../context/getAllUser";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { getAllUser = [] } = useGetAllUsers();

  // Filter users based on search input
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const filtered = getAllUser.filter(user =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, getAllUser]);

  const handleUserSelect = (user) => {
    setSelectedConversation(user);
    setSearch("");
    setFilteredUsers([]);
  };

  return (
    <div className="flex-col flex items-center justify-center h-16 shadow-md mt-6 relative">
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 px-4 py-2 rounded-full outline-none shadow-md placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
          />
          
          {/* Search results dropdown */}
          {filteredUsers.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user._id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={() => handleUserSelect(user)}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.username}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          type="button"
          onClick={() => {
            if (filteredUsers.length > 0) {
              handleUserSelect(filteredUsers[0]);
            }
          }}
          className="p-3 rounded-full bg-white text-blue-600 text-xl w-10 h-10 hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={filteredUsers.length === 0}
        >
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;