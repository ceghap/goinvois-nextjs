import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Companies {
  isModalOpen: boolean;
  toggle: () => void;
}

export const useCompaniesStore = create<Companies>()(
  devtools(
    persist((set) => ({
      isModalOpen: false,
      toggle: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    }))
  )
);
