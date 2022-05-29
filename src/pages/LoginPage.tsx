import loginAmico from '../images/login-amico.svg';

function LoginPage() {
  return (
    <div className="flex items-center h-screen justify-evenly">
      <div className="hidden w-2/5 p-3 lg:block">
        <object
          data={loginAmico}
          type="image/svg+xml"
          className="w-full"
        >
          Usuário fazendo login
        </object>
      </div>
      <form className="w-full lg:w-2/6">
        <h1>Bem-vindo(a)!</h1>
        <h2>Faça login para acessar nossa plataforma</h2>
        <label htmlFor="login-email">
          Email
          <input type="text" placeholder="Digite seu email" id="login-email" />
        </label>
        <label htmlFor="login-password">
          Senha
          <input type="password" placeholder="Digite sua senha" id="login-password" />
        </label>
        <button type="button" className="px-4 py-2 text-white rounded bg-primary-200 hover:bg-primary-100">
          Fazer login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
