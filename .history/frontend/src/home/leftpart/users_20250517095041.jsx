import React from "react";
import User from "./User";

const users = () => {
  return (
    <div
        className="w-[30%] h-screen bg-slate-900 text-white overflow-y-auto"
    >
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
