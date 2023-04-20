import { UserType } from "../../../../types";
import { CompanyType } from "../../../../types/CompanyType";

export const ReportUserCompany = ({
  user,
  company,
}: {
  user: Partial<UserType>;
  company: Partial<CompanyType>;
}) => (
  <div className="flex justify-evenly">
    <section>
      <h3>
        <strong className="text-lg">Usuário:</strong>
      </h3>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.dateOfBirth}</li>
        <li>{user.cityOfBirth}</li>
      </ul>
    </section>
    <section>
      <h3>
        <strong className="text-lg">Empresa:</strong>
      </h3>
      <ul>
        <li>{company.name}</li>
        <li>{company.cnpj}</li>
        <li>{company.address}</li>
        <li>{company.city}</li>
        <li>{company.state}</li>
      </ul>
    </section>
  </div>
);
