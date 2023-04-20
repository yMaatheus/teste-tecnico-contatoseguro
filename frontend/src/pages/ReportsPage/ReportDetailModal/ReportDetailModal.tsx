import { Modal } from "../../../components/Modal";
import { ReportType } from "../../../types/ReportType";

export const ReportDetailModal = ({
  id,
  userId,
  companyId,
  description,
  user,
  company,
}: ReportType) => (
  <Modal buttonLabel="Detalhes" htmlFor={`modal-report-details-${id}`}>
    <div className="w-full h-full flex flex-col gap-10">
      <h1 className="text-3xl self-center text-bold">Informações do Relato</h1>
      <div className="h-full flex flex-col justify-center w-[66%] items-start self-center gap-1">
        <span>Identificador: {id}</span>
        <span>Identificador do Usuário: {userId}</span>
        <span>Identificador da Empresa: {companyId}</span>
        <label htmlFor="">
          <strong className="text-lg">Descrição:</strong>
        </label>
        <p className="p-4 block break-words whitespace-pre-wrap border-l-2 border-l-orange-300">
          {description}
        </p>
      </div>
      <div className="flex justify-evenly">
        <section>
          <h3>
            <strong className="text-lg">Usuário:</strong>
          </h3>
          <ul>
            <li>{user?.name}</li>
            <li>{user?.email}</li>
            <li>{user?.phone}</li>
            <li>{user?.dateOfBirth}</li>
            <li>{user?.cityOfBirth}</li>
          </ul>
        </section>

        <section>
          <h3>
            <strong className="text-lg">Empresa:</strong>
          </h3>
          <ul>
            <li>{company?.name}</li>
            <li>{company?.cnpj}</li>
            <li>{company?.address}</li>
            <li>{company?.city}</li>
            <li>{company?.state}</li>
          </ul>
        </section>
      </div>
    </div>
  </Modal>
);
