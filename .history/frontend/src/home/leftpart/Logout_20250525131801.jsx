import React from "react";
import Profile from "./Profile";

const logout = () => {
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Optionally, redirect to login page or home page
    window.location.href = "/login"; // Adjust the path as needed
  };
  return (
    <div className="flex align-center justify-start  ">
      <div className="flex align-middle gap-80  ">
        <button
          onClick={handleLogout}
          className="mt-4 rounded-full bg-white text-blue-600 text-xl w-10 h-10  hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <i className="text-3xl  ri-logout-circle-line"></i>
        </button>
        <button
        onClick={()=>{
         <Profile/>
        }}
         className="mt-4 rounded-full bg-white text-blue-600 text-xl w-10 h-10  hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <i  className ="text-3xl ri-user-line "></i>
        </button>
      </div>
    </div>
  );
};

export default logout;
