import { create } from "zustand";

const useConversation = create((set, get) => ({
  selectedConversation: null,
  messages: [],
  
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation, messages: [] }), // clear messages when changing conv maybe?
  
  setMessages: (messages) =>
    set({ messages }),
  
  addMessage: (message) => {
    set((state) => {
      // Prevent duplicate messages based on unique _id
      if (state.messages.find((msg) => msg._id === message._id)) {
        return {}; // no change if already exists
      }
      return { messages: [...state.messages, message] };
    });
  },

  // Optional: Clear messages, useful when switching conversations or logging out
  clearMessages: () => set({ messages: [] }),
}));

export default useConversation;
