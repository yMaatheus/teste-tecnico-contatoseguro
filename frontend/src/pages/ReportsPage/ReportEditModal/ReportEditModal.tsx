import { Modal } from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { QueryObserverResult } from "@tanstack/react-query";
import { closeModal } from "../../../utils/modal.util";
import { ReportType } from "../../../types/ReportType";
import { updateReport } from "../../../services/report";

const schema = yup
  .object({
    description: yup.string().min(6).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface EditModalProps extends ReportType {
  refetch: () => Promise<QueryObserverResult<ReportType[], unknown>>;
}

export const ReportEditModal = ({
  id,
  description,
  refetch,
}: EditModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    values: {
      description,
    },
  });

  const submit = async (data: FormData) => {
    await updateReport(id, data);
    closeModal(`modal-report-edit-${id}`);
    refetch();
  };

  return (
    <Modal buttonLabel="Editar" htmlFor={`modal-report-edit-${id}`}>
      <form
        className="flex flex-col gap-6 justify-center"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex justify-center flex-wrap gap-6">
          <section>
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
