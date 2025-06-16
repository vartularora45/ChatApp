import React from "react";
import User from "./User";

const users = () => {
  return (
    <div className="overflow-y-auto h-screen">
      <div>
        <div className="mt-4 text-white text-xl font-bold bg-gray-600 w-full">
          <h1 className="px-4 py-2 text-white flex align-center font-bold">
            MESSAGES
          </h1>
        </div>
      </div>
      <div>
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
