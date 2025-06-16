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
  }, []); // only once on mount/unmount

  return (
    <div className="flex flex-col flex-1 h-screen bg-[#1E2A38]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUsers />
          <div className=">
            <Messages />
          </div>
          <div className="border-t border-gray-600 p-2">
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
    <div className="flex flex-col justify-center items-center h-full text-gray-400 text-center px-4">
      <h1 className="text-5xl mb-4">Welcome {authUser?.name || 'Guest'}</h1>
      <div className="text-4xl mb-2">No Chat Selected</div>
      <div className="text-xl">Click on a chat to start a conversation</div>
    </div>
  );
};
