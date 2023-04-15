import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ptShort } from "yup-locale-pt";

yup.setLocale(ptShort);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

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
      <input type="text" id="email" className="w-full" {...register("email")} />
      <p className="error-message">{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input
        type="text"
        id="password"
        className="w-full"
        {...register("password")}
      />
      <p className="error-message">{errors.password?.message}</p>

      <span className="text-gray-500 text-sm self-end">
        Esqueceu sua senha?
      </span>

      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;