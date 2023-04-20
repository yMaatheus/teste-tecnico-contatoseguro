import { create } from "zustand";

interface useCompanyStoreType {
  search: string;
  searchLabel: string;
  setSearch: (search: string) => void;
  setSearchLabel: (searchLabel: string) => void;
}

const useCompanyStore = create<useCompanyStoreType>()((set) => ({
  search: "",
  searchLabel: "Nome",
  setSearch: (search: string) => set(() => ({ search })),
  setSearchLabel: (searchLabel: string) => set(() => ({ searchLabel })),
}));

export default useCompanyStore;
