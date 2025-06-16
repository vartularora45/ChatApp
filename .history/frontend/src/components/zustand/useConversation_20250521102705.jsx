import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSe: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
