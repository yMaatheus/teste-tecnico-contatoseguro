import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ptShort } from "yup-locale-pt";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthProvider";
import { useState } from "react";
import { AxiosError } from "axios";

yup.setLocale(ptShort);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const { signIn } = useAuth();
  const [responseError, setResponseError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.email, data.password);
      navigate("/usuarios", { replace: true });
    } catch (error) {
      const { response } = error as AxiosError;
      if (response?.status === 401) {
        setResponseError("Email ou senha incorretos");
      } else {
        setResponseError("Erro ao fazer login");
      }
    }
  };

  return (
    <form
      className="h-full w-full flex flex-col gap-2 p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="mb-4 text-blue-950 text-3xl">
        <strong className="font-semibold">Faça seu login </strong>e seja
        <br />
        bem-vindo(a) à plataforma.
      </span>

      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        placeholder="Insira seu e-mail"
        className="w-full input input-bordered"
        {...register("email")}
      />
      <p className="error-message">{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Insira sua senha"
        className="w-full input input-bordered"
        {...register("password")}
      />
      <p className="error-message">
        {errors.password?.message || responseError}
      </p>

      <span className="text-gray-500 text-sm self-end">
        Esqueceu sua senha?
      </span>

      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
};
