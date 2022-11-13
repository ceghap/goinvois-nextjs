import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Companies {
  isModalOpen: boolean;
  toggle: () => void;
}

export const useCompaniesStore = create<Companies>()(
  devtools(
    immer((set) => ({
      isModalOpen: false,
      toggle: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    }))
  )
);
