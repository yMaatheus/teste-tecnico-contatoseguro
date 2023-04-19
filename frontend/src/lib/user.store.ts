import { create } from "zustand";

interface UserStoreType {
  search: string;
  searchLabel: string;
  setSearch: (search: string) => void;
  setSearchLabel: (searchLabel: string) => void;
}

const useUserStore = create<UserStoreType>()((set) => ({
  search: "",
  searchLabel: "Nome",
  setSearch: (search: string) => set(() => ({ search })),
  setSearchLabel: (searchLabel: string) => set(() => ({ searchLabel })),
}));

export default useUserStore;
