import loginAmico from 'images/login-amico.png';
import useBreakpoints from 'hooks/useBreakpoints';
import LoginForm from 'patterns/LoginForm';
import Header from 'patterns/Header';

function LoginPage() {
  const { lgScreen, mdScreen } = useBreakpoints();
  return (
    <div className="flex flex-col items-center justify-around h-screen lg:flex-row">
      {
        lgScreen && (
        <object
          data={loginAmico}
          type="image/svg+xml"
          className="w-5/12 h-3/5"
        >
          Usuário fazendo login
        </object>
        )
      }
      {
        !mdScreen && <Header text="Login" path="/" />
      }
      <LoginForm />
    </div>
  );
}

export default LoginPage;
