import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../services/company/getAll.company.service";
import { CompanyTable } from "./CompanyTable";
import { CompanyCreateModal } from "./CompanyCreateModal";
import useAppStore from "../../lib/store";

export const CompaniesPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: getCompanies,
  });

  const [search, searchLabel] = useAppStore((state) => [
    state.search,
    state.searchLabel,
  ]);

  const companies = data //TODO - Refactor this
    ?.filter((company) => {
      if (searchLabel === "Nome") {
        return company.name.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Endereço") {
        return company.address.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Cidade") {
        return company.city.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Estado") {
        return company.state?.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });

  const table = !isLoading && (
    <CompanyTable companies={companies || []} refetch={refetch} />
  );
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Endereço", "Cidade", "Estado"]}
        insertButton={<CompanyCreateModal refetch={refetch} />}
        table={table}
      />
    </div>
  );
};
