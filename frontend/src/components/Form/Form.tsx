import React from "react";
import { Logo } from "../Logo";

type FormType = {
  columns: string[];
  insertButton?: React.ReactNode;
  table?: React.ReactNode;
  search: string;
  searchLabel: string;
  setSearch: (value: string) => void;
  setSearchLabel: (value: string) => void;
};

export const Form = ({
  columns,
  insertButton,
  table,
  search,
  searchLabel,
  setSearch,
  setSearchLabel,
}: FormType) => (
  <div className="flex flex-col gap-10 bg-slate-400 p-10 m-10">
    <Logo className="h-24" classWrapper="flex justify-center" />

    <div className="header-wrapper flex gap-10 justify-between">
      <div>{insertButton}</div>
      <div className="flex gap-9">
        <input
          type="text"
          placeholder="Buscar..."
          className="input w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select max-w-xs"
          value={searchLabel}
          onChange={(e) => setSearchLabel(e.target.value)}
        >
          {columns?.map((column) => (
            <option key={`${column}`}>{column}</option>
          ))}
        </select>
      </div>
    </div>

    {table}
  </div>
);
