import InputLabel from 'components/InputLabel';
import Context from 'Context/context';
import useBreakpoints from 'hooks/useBreakpoints';
import { useContext, useState } from 'react';
import {
  Title, Subtitle, Button,
} from 'styles';
import Header from 'templates/Header';

function AddContactPage() {
  const { addContact } = useContext(Context);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const { mdScreen } = useBreakpoints();

  return mdScreen ? (
    <div className="flex flex-col items-center w-screen h-screen bg-themeNeutral-300">
      <Header path="/contacts" text="Cadastrar um novo contato" />
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        <div className="w-full bg-white rounded-lg shadow-md">
          <form className="flex flex-col mx-10 my-12 space-between">
            <div className="text-center">
              <Title compact="true">Cadastre um novo contato</Title>
              <Subtitle>Preencha as informações para cadastrar um novo contato</Subtitle>
            </div>
            <div className="grid grid-cols-2 gap-5 my-20">
              <div className="col-span-2">
                <InputLabel
                  label="Nome"
                  type="text"
                  placeholder="Digite o nome do contato"
                  value={name}
                  change={({ target }) => setName(target.value)}
                />
              </div>
              <InputLabel
                label="Email"
                type="text"
                placeholder="Digite o email"
                value={email}
                change={({ target }) => setEmail(target.value)}
              />
              <InputLabel
                label="Celular"
                type="text"
                placeholder="Digite o celular"
                value={mobile}
                change={({ target }) => setMobile(target.value)}
              />
            </div>
            <Button>Cadastrar contato</Button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen">
      <Header path="/contacts" text="Cadastrar um novo contato" />
      <form className="flex flex-col justify-between mx-6 h-5/6">
        <div>
          <Subtitle className="text-center">Preencha as informações para cadastrar um novo contato</Subtitle>
          <div className="grid gap-5 mt-12">
            <div>
              <InputLabel
                label="Nome"
                type="text"
                placeholder="Digite o nome do contato"
                value={name}
                change={({ target }) => setName(target.value)}
              />
            </div>
            <InputLabel
              label="Email"
              type="text"
              placeholder="Digite o email"
              value={email}
              change={({ target }) => setEmail(target.value)}
            />
            <InputLabel
              label="Celular"
              type="text"
              placeholder="Digite o celular"
              value={mobile}
              change={({ target }) => setMobile(target.value)}
            />
          </div>
        </div>

        <Button>Cadastrar contato</Button>
      </form>
    </div>
  );
}

export default AddContactPage;
