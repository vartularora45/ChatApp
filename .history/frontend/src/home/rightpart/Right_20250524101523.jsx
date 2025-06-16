import React, { useEffect } from 'react';
import ChatUsers from './ChatUsers';
import TypeSend from './TypeSend';
import Messages from './Messages';
import useConversation from '../../components/zustand/useConversation';
import { useAuth } from '../../context/AuthContextProvider';

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col h-screen bg-black text-white">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col h-full">
          {/* Header with user info */}
          <ChatUsers />
          
          {/* Messages area - takes up remaining space */}
          <div className="flex-1 overflow-y-auto px-4">
            <Messages />
          </div>
          
          {/* Message input at bottom */}
          <div className="border-t border-gray-700 p-4">
            <TypeSend />
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex flex-1 justify-center items-center h-full">
      <div className="flex flex-col items-center text-gray-400 text-center px-4 max-w-md">
        <h1 className="text-3xl md:text-4xl mb-4 text-white font-semibold">
          Welcome {authUser?.name || "Guest"}
        </h1>
        <div className="text-2xl md:text-3xl mb-2 text-gray-300">
          No Chat Selected
        </div>
        <div className="text-lg md:text-xl text-gray-500">
          Select a chat to start messaging
        </div>
      </div>
    </div>
  );
};