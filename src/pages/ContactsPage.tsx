import { useState, useEffect } from 'react';
import getContacts from '../api/contacts';
import Header from '../components/Header';
import { Button } from '../styles';
import { Contact } from '../types';

function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getContacts(token).then((newContacts) => setContacts(newContacts));
    }
  }, []);

  console.log(contacts);

  return (
    <div className="flex flex-col h-screen">
      <Header path="/login" text="Listagem de usuários" />
      <div className="px-4 mt-5">
        <Button>Cadastrar contato</Button>
      </div>
      <div>
        <div>
          <p>
            Total:
            {' '}
            {contacts.length}
            {' '}
            contato
            {contacts.length > 1 && 's'}
          </p>
          <p>Ver Todos</p>
        </div>
        {}
      </div>
    </div>
  );
}

export default ContactsPage;
