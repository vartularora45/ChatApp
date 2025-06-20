import { create } from "zustand";

const useConversation = create((set, get) => ({
  selectedConversation: null,
  messages: [],

  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation, messages: [] }),

  setMessages: (messages) =>
    set({ messages: messages || [] }),

  addMessage: (message) => {
    set((state) => {
      const currentMessages = state.messages || [];
      if (currentMessages.find((msg) => msg._id === message._id)) {
        return {};
      }
      return { messages: [...currentMessages, message] };
    });
  },

  clearMessages: () => set({ messages: [] }),
}));

export default useConversation;
