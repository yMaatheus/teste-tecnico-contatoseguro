import { Modal } from "../../../components/Modal";
import { CompanyType } from "../../../types/CompanyType";

export const CompanyDetailModal = ({
  id,
  name,
  cnpj,
  address,
  city,
  state,
  users,
}: CompanyType) => (
  <Modal buttonLabel="Detalhes" htmlFor={`modal-company-details-${id}`}>
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <span>Nome: {name}</span>
        <span>Cnpj: {cnpj}</span>
        <span>Endereço: {address}</span>
        <span>Cidade: {city}</span>
        <span>Estado: {state}</span>
      </div>
      <div>
        <h3>Usuários</h3>
        <ul>
          {users?.map((user) => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </Modal>
);
