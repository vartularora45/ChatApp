import React, { useEffect } from 'react'
import ChatUsers from './ChatUsers'
import TypeSend from './TypeSend'
import  Messages from './Messages'
import useConversation from '../../components/zustand/useConversation'
import { useAuth } from '../../context/AuthContextProvider'
import Loading from '../../components/loading'
const Right = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(()=>{
   
    return ()=>{
      setSelectedConversation(null)
    }
  },[selectedConversation])
  return (
    <div>
      {!selectedConversation ?(<NoChatSelected />
      ) :(<> <ChatUsers />
      <Messages />
      <TypeSend />
      </>)}
    </div>

  )
}

export default Right


const NoChatSelected = () => {
  const {authUser} = useAuth();
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-gray-400">
              Welcome {authUser.fullname}
            </h1>
            <div className="text-4xl text-gray-400">No Chat Selected</div>
            <div className="text-xl text-gray-400">
              Click on a chat to start a conversation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

