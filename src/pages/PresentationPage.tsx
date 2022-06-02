import { useNavigate } from 'react-router-dom';
import loginAmico from 'images/login-amico.svg';
import PageTitle from 'components/PageTitle';
import { Button } from 'styles';

function PresentationPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end h-screen px-4">
      <object data={loginAmico} type="image/svg+xml" className="w-full mb-16 h-1/3">
        Usuário fazendo login
      </object>
      <div className="mb-16">
        <PageTitle
          title="Bem-vindo! É hora de começar  uma nova experiência"
          subtitle="Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta."
        />
      </div>
      <Button className="mb-16" onClick={() => navigate('/login')}>
        Começar
      </Button>
    </div>
  );
}

export default PresentationPage;
