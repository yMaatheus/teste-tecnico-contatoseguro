import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services/company/getAll.company.service";
import { CompanyTable } from "./CompanyTable";

export const CompaniesPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: getCompanies,
  });

  const companies = data;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Endereço", "Cidade", "Estado"]}
        table={
          !isLoading && (
            <CompanyTable companies={companies || []} refetch={refetch} />
          )
        }
      />
    </div>
  );
};
