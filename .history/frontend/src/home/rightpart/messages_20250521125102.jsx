import React from 'react'
import Message from './message'
import  getMessages from '../../context/useGetMessage.jsx'
import Loading from '../loading'
const Messages = () => {
  const {loading,messages} = getMessages();
  return (
    <div className="flex1 w-full h-[80%] overflow-y-scroll bg-slate-700 text-white p-4">
      {loading ?(<Loading/>) : (messages.length > 0 && messages.map(()=>{
        
      }))}
    </div>
  );
}

export default Messages