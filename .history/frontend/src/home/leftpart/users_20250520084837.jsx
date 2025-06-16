import React from "react";
import User from "./User";
import { useState, useEffect } from "react";
import getAllUsers from "../../context/getAllUser";
const users = () => {
  const { getAllUser, loading } = getAllUsers();
  console.log("getAllUser", getAllUser);
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
      className="flex1 h-screen overflow-y-auto  bg-gray-800 text-white"
      style={{ height: "calc(100vh - 32vh)" }}
      >
    {
      getAllUser
    }
      </div>
    </div>
  );
};

export default users;
