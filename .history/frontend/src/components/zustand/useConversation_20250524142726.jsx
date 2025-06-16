import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  messages: [],
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  setMessages: (messages) => set({ messages }),
  
}));

export default useConversation;