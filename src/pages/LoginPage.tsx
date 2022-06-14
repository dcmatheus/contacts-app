import LoginImage from 'components/LoginImage';
import useBreakpoints from 'hooks/useBreakpoints';
import LoginForm from 'patterns/LoginForm';
import Header from 'patterns/Header';

function LoginPage() {
  const { lgScreen, mdScreen } = useBreakpoints();
  return (
    <div className="flex flex-col items-center justify-around h-screen lg:flex-row">
      {
        lgScreen && <LoginImage />
      }
      {
        !mdScreen && <Header text="Login" path="/" />
      }
      <LoginForm />
    </div>
  );
}

export default LoginPage;
