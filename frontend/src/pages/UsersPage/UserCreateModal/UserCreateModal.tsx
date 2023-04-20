import { useForm } from "react-hook-form";
import { Modal } from "../../../components/Modal";
import { BiPlus } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../../services/user";
import { ViewToDate } from "../../../utils/date.util";
import { UserType } from "../../../types";
import { closeModal } from "../../../utils/modal.util";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../../services/company";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().nullable(),
    dateOfBirth: yup.string().nullable(),
    cityOfBirth: yup.string().nullable(),
    companies: yup.array().of(yup.string()),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface UserCreateModalProps {
  refetch: () => Promise<QueryObserverResult<UserType[], unknown>>;
}

export const UserCreateModal = ({ refetch }: UserCreateModalProps) => {
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

  const submit = async (data: FormData) => {
    await createUser({
      ...data,
      dateOfBirth: ViewToDate(data.dateOfBirth || ""),
    } as UserType);
    reset();
    closeModal(`modal-user-insert`);
    refetch();
  };

  return (
    <Modal
      buttonLabel={<BiPlus color="white" size="32" className="w-full h-full" />}
      htmlFor={`modal-user-insert`}
      labelClass="btn w-full h-full"
    >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
        <div className="flex justify-center flex-wrap gap-6">
          <section>
            <label className="label" htmlFor="name">
              <span className="label-text">Nome</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />

            <span className="error-message">{errors.name?.message}</span>

            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />

            <span className="error-message">{errors.email?.message}</span>

            <label className="label" htmlFor="phone">
              <span className="label-text">Telefone</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="(00) 00000-0000"
              className="input input-bordered w-full max-w-xs"
              {...register("phone")}
            />

            <span className="error-message">{errors.phone?.message}</span>
          </section>

          <section>
            <label className="label" htmlFor="dateOfBirth">
              <span className="label-text">Aniversário</span>
            </label>
            <input
              type="text"
              id="dateOfBirth"
              placeholder="00/00/0000"
              className="input input-bordered w-full max-w-xs"
              {...register("dateOfBirth")}
            />

            <span className="error-message">{errors.dateOfBirth?.message}</span>

            <label className="label" htmlFor="cityOfBirth">
              <span className="label-text">Cidade que nasceu</span>
            </label>
            <input
              type="text"
              id="cityOfBirth"
              className="input input-bordered w-full max-w-xs"
              {...register("cityOfBirth")}
            />

            <span className="error-message">{errors.cityOfBirth?.message}</span>
          </section>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <h1>Empresas</h1>
          <div>
            {companies?.map((company) => (
              <div key={company.id} className="flex gap-1">
                <input
                  type="checkbox"
                  id={`${company.id}`}
                  value={company.id}
                  {...register("companies")}
                />
                <label htmlFor={`${company.id}`}>{company.name}</label>
              </div>
            ))}
          </div>
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
