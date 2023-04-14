export const LoginPage = () => (
  <div>
    <div>
      <span>
        <strong>Faça seu login</strong>
        e seja
        <br />
        bem-vindo(a) à plataforma.
      </span>
      <form action="">
        <label htmlFor="email">
          <input type="text" id="email" name="email" placeholder="Login" />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        <span>Esqueceu sua senha?</span>
        <button type="button">Login</button>
      </form>
    </div>
  </div>
);
