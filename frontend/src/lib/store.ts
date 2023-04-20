import { create } from "zustand";

interface StoreType {
  search: string;
  searchLabel: string;
  setSearch: (search: string) => void;
  setSearchLabel: (searchLabel: string) => void;
}

const useAppStore = create<StoreType>()((set) => ({
  search: "",
  searchLabel: "Nome",
  setSearch: (search: string) => set(() => ({ search })),
  setSearchLabel: (searchLabel: string) => set(() => ({ searchLabel })),
}));

export default useAppStore;
