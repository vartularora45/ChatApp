import React from 'react'

const ChatUsers = () => {
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
            className="flex1 h-screen overflow-y-auto bg-gray-800 text-white"
            style={{ height: "calc(100vh - 32vh)" }}
        >
            {/* Replace with actual user components */}
            {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="p-4 border-b border-gray-700">
                User {index + 1}
            </div>
            ))}
        </div>
    </div>
  )
}

export default ChatUsers