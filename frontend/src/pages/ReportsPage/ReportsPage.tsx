import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/report";
import { ReportTable } from "./ReportTable";
import { ReportCreateModal } from "./ReportCreateModal";

export const ReportsPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: getReports,
  });

  const table = !isLoading && (
    <ReportTable reports={data || []} refetch={refetch} />
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Endereço", "Cidade", "Estado"]}
        insertButton={<ReportCreateModal refetch={refetch} />}
        table={table}
        showSearch={false}
      />
    </div>
  );
};
