import InputLabel from '../components/InputLabel';
import PageTitle from '../components/PageTitle';
import {
  Button, Form, SubButton,
} from '../styles';

function LoginForm() {
  return (
    <Form>
      <fieldset>
        <PageTitle
          title="Bem-vindo(a)!"
          subtitle="Faça login para acessar nossa plataforma"
        />
        <fieldset className="mt-6">
          <InputLabel label="Email" type="text" placeholder="Digite seu email" />
          <InputLabel label="Senha" type="password" placeholder="Digite sua senha" />
          <SubButton type="button">Problemas com login?</SubButton>
        </fieldset>
      </fieldset>
      <Button
        type="button"
        className="mb-16 md:m-0"
      >
        Entrar
      </Button>
    </Form>
  );
}

export default LoginForm;
