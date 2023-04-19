import { Modal } from "../../../components/Modal";
import { UserType } from "../../../types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUser } from "../../../services/user";
import { QueryObserverResult } from "@tanstack/react-query";
import { ViewToDate, dateToView } from "../../../utils/date.util";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().nullable(),
    dateOfBirth: yup.string().nullable(),
    cityOfBirth: yup.string().nullable(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface UserEditModalProps {
  id: number;
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  cityOfBirth?: string;
  refetch: () => Promise<QueryObserverResult<UserType[], unknown>>;
}

export const UserEditModal = ({
  id,
  name,
  email,
  phone,
  dateOfBirth,
  cityOfBirth,
  refetch,
}: UserEditModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    values: {
      name,
      email,
      phone,
      dateOfBirth: dateToView(dateOfBirth),
      cityOfBirth,
    },
  });

  const submit = async (data: FormData) => {
    await updateUser(id, {
      ...data,
      dateOfBirth: ViewToDate(data.dateOfBirth || ""),
    } as UserType);
    const checkbox = document.querySelector(
      `#modal-user-edit-${id}`
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    refetch();
  };

  return (
    <Modal buttonLabel="Editar" htmlFor={`modal-user-edit-${id}`}>
      <form
        className="flex flex-col gap-6 justify-center"
        onSubmit={handleSubmit(submit)}
      >
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

        <div className="flex justify-center gap-6">
          <button
            type="submit"
            className="w-40 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
};
