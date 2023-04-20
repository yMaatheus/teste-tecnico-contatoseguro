import { Modal } from "../../../components/Modal";
import { ReportType } from "../../../types/ReportType";
import { ReportUserCompany } from "./ReportUserCompany";

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
        <span className="text-lg font-bold">Identificador: {id}</span>
        <span className="text-lg font-bold">
          Identificador do Usuário: {userId}
        </span>
        <span className="text-lg font-bold">
          Identificador da Empresa: {companyId}
        </span>
        <label htmlFor="" className="text-lg font-bold">
          Descrição:
        </label>
        <p className="p-4 block break-words whitespace-pre-wrap border-l-2 border-l-orange-300">
          {description}
        </p>
      </div>
      <ReportUserCompany user={user || {}} company={company || {}} />
    </div>
  </Modal>
);
