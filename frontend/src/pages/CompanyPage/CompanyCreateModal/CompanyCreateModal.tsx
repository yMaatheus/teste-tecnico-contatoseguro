import { useForm } from "react-hook-form";
import { Modal } from "../../../components/Modal";
import { BiPlus } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { closeModal } from "../../../utils/modal.util";
import { QueryObserverResult } from "@tanstack/react-query";
import { CompanyType } from "../../../types/CompanyType";
import { createCompany } from "../../../services/company";

const schema = yup
  .object({
    name: yup.string().required(),
    cnpj: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface UserCreateModalProps {
  refetch: () => Promise<QueryObserverResult<CompanyType[], unknown>>;
}

export const CompanyCreateModal = ({ refetch }: UserCreateModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: FormData) => {
    await createCompany(data);
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

            <label className="label" htmlFor="cnpj">
              <span className="label-text">CNPJ</span>
            </label>
            <input
              type="text"
              id="cnpj"
              className="input input-bordered w-full max-w-xs"
              {...register("cnpj")}
            />

            <span className="error-message">{errors.cnpj?.message}</span>

            <label className="label" htmlFor="address">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              id="address"
              className="input input-bordered w-full max-w-xs"
              {...register("address")}
            />

            <span className="error-message">{errors.address?.message}</span>
          </section>

          <section>
            <label className="label" htmlFor="city">
              <span className="label-text">Cidade</span>
            </label>
            <input
              type="text"
              id="city"
              className="input input-bordered w-full max-w-xs"
              {...register("city")}
            />

            <span className="error-message">{errors.city?.message}</span>

            <label className="label" htmlFor="state">
              <span className="label-text">Estado</span>
            </label>
            <input
              type="text"
              id="state"
              className="input input-bordered w-full max-w-xs"
              {...register("state")}
            />

            <span className="error-message">{errors.state?.message}</span>
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
