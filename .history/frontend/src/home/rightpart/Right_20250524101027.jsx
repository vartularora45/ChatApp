import React, { useEffect } from 'react';
import ChatUsers from './ChatUsers';
import TypeSend from './TypeSend';
import Messages from './Messages';
import useConversation from '../../components/zustand/useConversation';
import { useAuth } from '../../context/AuthContextProvider';

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Clear selected chat on unmount
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 h-screen bg-black text-white transition-all duration-300">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUsers />
          <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
            <Messages />
          </div>
          <div className="border-t border-gray-700 p-2 bg-[#0A0A0A] shadow-inner">
            <TypeSend />
          </div>
        </>
      )}
    </div>
  );
};

export default Right;

// Placeholder when no chat is selected
const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-full text-gray-400 text-center px-4 animate-fadeIn">
      <h1 className="text-5xl mb-4 font-bold text-white">
        Welcome {authUser?.name || 'Guest'}
      </h1>
      <div className="text-3xl mb-2 text-gray-300">No Chat Selected</div>
      <div className="text-lg text-gray-500">Click on a chat to start a conversation</div>
    </div>
  );
};
