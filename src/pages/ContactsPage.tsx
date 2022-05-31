import { useState, useEffect } from 'react';
import ContactsList from 'templates/ContactsList';
import getContacts from 'api/contacts';
import Header from 'templates/Header';
import { Button } from 'styles';
import { Contact } from 'types';

function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getContacts(token).then((newContacts) => setContacts(newContacts));
    }
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header path="/login" text="Listagem de usuários" />
      <div className="mx-4 mt-5">
        <Button>Cadastrar contato</Button>
        <ContactsList contacts={contacts} />
      </div>
    </div>

  );
}

export default ContactsPage;
