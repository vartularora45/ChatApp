import React, { useEffect } from 'react';
import ChatUsers from './ChatUsers';
import TypeSend from './TypeSend';
import Messages from './Messages';
import useConversation from '../../components/zustand/useConversation';
import { useAuth } from '../../context/AuthContextProvider';

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, []); // Only run on mount/unmount

  return (
    <div className="">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUsers />
          <Messages />
          <TypeSend />
        </>
      )}
    </div>
  );
};

export default Right;

// Component to show when no chat is selected
const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center text-gray-400 text-center px-4">
        <h1 className="text-5xl mb-4">Welcome {authUser?.name || "Guest"}</h1>
        <div className="text-4xl mb-2">No Chat Selected</div>
        <div className="text-xl">Click on a chat to start a conversation</div>
      </div>
    </div>
  );
};
