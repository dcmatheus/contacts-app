import InputLabel from 'components/InputLabel';
import Context from 'Context/context';
import useBreakpoints from 'hooks/useBreakpoints';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Title, Subtitle, Button,
} from 'styles';
import Header from 'templates/Header';

function AddContactPage() {
  const { editContact, contacts } = useContext(Context);
  const { id } = useParams();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const { mdScreen } = useBreakpoints();
  const navigate = useNavigate();

  const createContact = () => {
    editContact(Number(id), { name, mobile, email });
    setName('');
    setMobile('');
    setEmail('');
    navigate('/contacts');
  };

  useEffect(() => {
    const editedContact = contacts.find((contact) => contact.id === Number(id)) || { name: '', mobile: '', email: '' };
    setName(editedContact.name);
    setMobile(editedContact.mobile);
    setEmail(editedContact.email);
  }, []);

  return mdScreen ? (
    <div className="flex flex-col items-center w-screen h-screen bg-themeNeutral-300">
      <Header path="/contacts" text="Cadastrar um novo contato" />
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        <div className="w-full bg-white rounded-lg shadow-md">
          <form className="flex flex-col mx-10 my-12 space-between">
            <div className="text-center">
              <Title compact="true">Edite o contato</Title>
              <Subtitle>Faça as alterações necessárias e ao terminar salve seu contato</Subtitle>
            </div>
            <div className="grid grid-cols-2 gap-5 my-20">
              <div className="col-span-2">
                <InputLabel
                  label="Nome Completo"
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
            <Button type="button" onClick={() => createContact()}>Cadastrar contato</Button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen">
      <Header path="/contacts" text="Cadastrar um novo contato" />
      <form className="flex flex-col justify-between mx-6 h-5/6">
        <div>
          <Subtitle className="text-center">Faça as alterações necessárias e ao terminar salve seu contato</Subtitle>
          <div className="grid gap-5 mt-12">
            <div>
              <InputLabel
                label="Nome Completo"
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

        <Button type="button" onClick={() => createContact()}>Salvar alterações</Button>
      </form>
    </div>
  );
}

export default AddContactPage;
