import { useForm } from "react-hook-form";
import { Modal } from "../../../components/Modal";
import { BiPlus } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModal } from "../../../utils/modal.util";
import { useQuery } from "@tanstack/react-query";
import { ReportType } from "../../../types/ReportType";
import { getUsers } from "../../../services/user";
import { getCompanies } from "../../../services/company";
import { createReport } from "../../../services/report";
import { CreateModalProps } from "../../../types/CreateModalProps";

const schema = yup
  .object({
    userId: yup.number().positive().required(),
    companyId: yup.number().positive().required(),
    description: yup.string().min(6).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const ReportCreateModal = ({
  refetch,
}: CreateModalProps<ReportType>) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { data: companies } = useQuery({
    queryKey: ["company"],
    queryFn: getCompanies,
  });

  const { data: users } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  const submit = async (data: FormData) => {
    await createReport(data);
    reset();
    closeModal(`modal-report-insert`);
    refetch();
  };

  return (
    <Modal
      buttonLabel={<BiPlus color="white" size="32" className="w-full h-full" />}
      htmlFor={`modal-report-insert`}
      labelClass="btn w-full h-full"
    >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col justify-center items-center">
          <label className="label" htmlFor="name">
            <span className="label-text">Descrição</span>
          </label>
          <textarea
            placeholder="Escreva aqui..."
            className="textarea textarea-bordered  w-full max-w-xs"
            rows={4}
            cols={50}
            {...register("description")}
          ></textarea>

          <span className="error-message">{errors.description?.message}</span>
        </div>

        <div className="flex justify-around">
          <section>
            <h1>Empresa</h1>
            <div>
              {companies?.map((company) => (
                <div
                  key={`${company.id}-${company.name}`}
                  className="flex gap-1"
                >
                  <input
                    type="radio"
                    id={`${company.id}-${company.name}`}
                    value={company.id}
                    {...register("companyId")}
                  />
                  <label htmlFor={`${company.id}-${company.name}`}>
                    {company.name}
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h1>Usuário</h1>
            <div>
              {users?.map((user) => (
                <div key={`${user.id}-${user.name}`} className="flex gap-1">
                  <input
                    type="radio"
                    id={`${user.id}-${user.name}`}
                    value={user.id}
                    {...register("userId")}
                  />
                  <label htmlFor={`${user.id}-${user.name}`}>
                    {user.name} - {user.email}
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex justify-center gap-6">
          <button
            type="submit"
            className="w-40 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Criar
          </button>
        </div>
      </form>
    </Modal>
  );
};
