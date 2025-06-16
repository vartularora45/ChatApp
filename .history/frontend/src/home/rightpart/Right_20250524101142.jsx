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
    <div className="w-full md:w-[70%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen mx-auto bg-black text-white flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUsers />
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <Messages />
          </div>
          <div className="border-t border-gray-700 p-2 \ shadow-inner">
            <TypeSend />
          </div>
        </>
      )}
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center text-gray-400 text-center px-4 max-w-xl w-full">
        <h1 className="text-5xl mb-4 text-white font-semibold">Welcome {authUser?.name || "Guest"}</h1>
        <div className="text-4xl mb-2 text-gray-300">No Chat Selected</div>
        <div className="text-xl text-gray-500">Click on a chat to start a conversation</div>
      </div>
    </div>
  );
};
