import { Button } from "react-daisyui";
import { GenericTable } from "../../../components/GenericTable";
import { QueryObserverResult } from "@tanstack/react-query";
import { ReportType } from "../../../types/ReportType";
import { ReportDetailModal } from "../ReportDetailModal";
import { ReportEditModal } from "../ReportEditModal";

export const ReportTable = ({
  reports = [],
  refetch,
}: {
  reports: ReportType[];
  refetch: () => Promise<QueryObserverResult<ReportType[], unknown>>;
}) => (
  <>
    <GenericTable
      keyExtractor={({ id }) => `${id}`}
      data={reports}
      columns={
        <tr>
          <th>Identificador</th>
          <th>Usuário</th>
          <th>Empresa</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      }
      renderItem={(report: ReportType) => (
        <>
          <td>{report.id}</td>
          <td>{report.user?.name}</td>
          <td>{report.company?.name}</td>
          <td></td>
          <td>
            <ReportDetailModal {...report} />
          </td>
          <td>
            <ReportEditModal {...report} refetch={refetch} />
          </td>
          <td>
            <Button className="btn btn-ghost btn-xs">Remover</Button>
          </td>
        </>
      )}
    />
  </>
);
