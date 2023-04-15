import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

const LoginPage = () => (
  <div className="h-full w-screen login-bg">
    <div className="ml-auto mr-auto pt-10 grid h-screen w-8/12 grid-rows-[10%_60%] gap-10 ">
      <LoginHeader />
      <main className="flex justify-between">
        <div className="self-end text-white w-[30rem]">
          <p className="flex flex-col text-4xl text-center">
            <span className="bg-blue-500 p-2 text-5xl font-bold rounded-lg">
              Canal de Denúncias:
            </span>
            tecnologia que protege a integridade do seu negócio!
          </p>
        </div>
        <div className="h-[80%] w-[30rem] rounded-xl bg-white self-end">
          <LoginForm />
        </div>
      </main>
    </div>
  </div>
);

export default LoginPage;
