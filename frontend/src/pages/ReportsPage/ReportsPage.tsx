import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/report";
import { ReportTable } from "./ReportTable";

export const ReportsPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: getReports,
  });

  const reports = data;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Endereço", "Cidade", "Estado"]}
        table={
          !isLoading && (
            <ReportTable reports={reports || []} refetch={refetch} />
          )
        }
      />
    </div>
  );
};
