import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/report";
import { ReportTable } from "./ReportTable";
import { ReportCreateModal } from "./ReportCreateModal";
import useAppStore from "../../lib/store";

export const ReportsPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: getReports,
  });

  const [search, searchLabel, setSearch, setSearchLabel] = useAppStore(
    (state) => [
      state.search,
      state.searchLabel,
      state.setSearch,
      state.setSearchLabel,
    ]
  );

  const reports = data;

  const table = !isLoading && (
    <ReportTable reports={reports || []} refetch={refetch} />
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Endereço", "Cidade", "Estado"]}
        insertButton={<ReportCreateModal refetch={refetch} />}
        table={table}
        search={search}
        searchLabel={searchLabel}
        setSearch={setSearch}
        setSearchLabel={setSearchLabel}
      />
    </div>
  );
};
