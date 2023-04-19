import { Modal } from "../../../components/Modal";
import { UserType } from "../../../types";
import { dateToView } from "../../../utils/date.util";

export const UserDetailModal = ({
  id,
  name,
  email,
  phone,
  dateOfBirth,
  cityOfBirth,
  companies,
}: UserType) => (
  <Modal buttonLabel="Detalhes" htmlFor={`modal-user-details-${id}`}>
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <span>Nome: {name}</span>
        <span>Email: {email}</span>
        <span>Telefone: {phone}</span>
        <span>Data de Aniversário: {dateToView(dateOfBirth)}</span>
        <span>Cidade que nasceu: {cityOfBirth}</span>
      </div>
      <div>
        <h3>Empresas</h3>
        <ul>
          {companies?.map((company) => (
            <li key={company.name}>{company.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </Modal>
);
