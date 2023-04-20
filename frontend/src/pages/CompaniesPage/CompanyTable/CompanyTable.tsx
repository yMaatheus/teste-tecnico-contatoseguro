import { Button } from "react-daisyui";
import { GenericTable } from "../../../components/GenericTable";
import { CompanyType } from "../../../types/CompanyType";
import { QueryObserverResult } from "@tanstack/react-query";
import { CompanyDetailModal } from "../CompanyDetailModal";

export const CompanyTable = ({
  companies = [],
  refetch,
}: {
  companies: CompanyType[];
  refetch: () => Promise<QueryObserverResult<CompanyType[], unknown>>;
}) => (
  <>
    <GenericTable
      keyExtractor={({ name }) => `${name}`}
      data={companies}
      columns={
        <tr>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      }
      renderItem={(company: CompanyType) => (
        <>
          <td>{company.name}</td>
          <td>{company.address}</td>
          <td>{company.city}</td>
          <td>{company.state}</td>
          <td></td>
          <td>
            <CompanyDetailModal {...company} />
          </td>
          <td>
            <CompanyDetailModal {...company} />
            {/* <UserEditModal {...company} refetch={refetch} /> */}
          </td>
          <td>
            <Button className="btn btn-ghost btn-xs">Remover</Button>
          </td>
        </>
      )}
    />
  </>
);
