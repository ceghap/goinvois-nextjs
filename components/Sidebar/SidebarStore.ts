import create from 'zustand';

interface SidebarState {
  page: string;
  name: string;
  setPage: (page: string, name: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  page: 'home',
  name: 'Home',
  setPage: (page: string, name: string) =>
    set(() => ({ page: page, name: name })),
}));
