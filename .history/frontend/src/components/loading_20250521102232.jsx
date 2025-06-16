import React from "react";

const loading = () => {
  return (
    <div
    className="flex h-screen w-full items-center justify-center bg-gray-100"
    >
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default loading;
