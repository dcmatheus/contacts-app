import Context from 'Context/context';
import { useContext, useState } from 'react';
import Header from 'templates/Header';

function EditContactPage() {
  const { editContact, contacts } = useContext(Context);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center w-screen h-screen md:bg-themeNeutral-300">
      <Header path="/contacts" text="Cadastrar um novo contato" />
      <div className="w-full md:bg-white lg:w-11/12 md:h-full md:rounded-lg md:my-7 md:shadow-md">
        <div className="mx-4 md:mx-10" />
      </div>
    </div>
  );
}

export default EditContactPage;
