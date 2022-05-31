import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestLoginUser from '../api/login';
import InputLabel from '../components/InputLabel';
import PageTitle from '../components/PageTitle';
import {
  Button, Form, SubButton,
} from '../styles';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function setDefault() {
    setEmail('user@diwe.com.br');
    setPassword('Mob20we23##');
  }
  async function loginUser() {
    const { token, invalidCredential } = await requestLoginUser(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigate('/contacts');
    } else {
      alert(invalidCredential);
    }
  }
  return (
    <Form>
      <fieldset>
        <PageTitle
          title="Bem-vindo(a)!"
          subtitle="Faça login para acessar nossa plataforma"
        />
        <fieldset className="mt-6">
          <InputLabel
            label="Email"
            type="text"
            placeholder="Digite seu email"
            value={email}
            change={({ target }) => setEmail(target.value)}
          />
          <InputLabel
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            change={({ target }) => setPassword(target.value)}
          />
          <SubButton type="button" onClick={() => setDefault()}>Problemas com login?</SubButton>
        </fieldset>
      </fieldset>
      <Button
        type="button"
        className="mb-16 md:m-0"
        onClick={() => loginUser()}
      >
        Entrar
      </Button>
    </Form>
  );
}

export default LoginForm;
