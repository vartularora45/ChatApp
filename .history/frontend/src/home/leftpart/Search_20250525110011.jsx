import React, { useState } from "react";
import useGetAllUsers from "../../context/getAllUser"; // Adjust the path
import useConversation from "../../components/zustand/useConversation";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { users } = useGetAllUsers(); // Should return { users: [...] }
  const { setSelectedConversation } = useConversation();

  // 🛡️ Safety: make sure users is an array
  const safeUsers = Array.isArray(users) ? users : [];

  const filteredUsers = safeUsers.filter((user) =>
    user?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "250px",
          borderRadius: "20px",
          border: "1px solid #ccc",
        }}
      />

      {searchTerm && (
        <div
          style={{
            marginTop: "0.5rem",
            background: "#f1f1f1",
            borderRadius: "10px",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                onClick={() => {
                  setSelectedConversation(user);
                  setSearchTerm("");
                }}
                style={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.username}
              </div>
            ))
          ) : (
            <div style={{ padding: "0.5rem", color: "#888" }}>
              No users found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
