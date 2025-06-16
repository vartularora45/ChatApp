import React from "react";
import User from "./User";

const users = () => {
  return (
    <div>
      <div>
        <div className="mt-4 text-white text-xl font-bold bg-gray-600 w-full">
          <h1 className="px-4 py-2 text-white flex align-center font-bold">
            MESSAGES
          </h1>
        </div>
      </div>
      <div
      className=" h-screen overflow-y-auto bg-gray-800 text-white"
      style={
        {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
          padding: "10px",
      }
      >
        <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default users;
