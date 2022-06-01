import { useState, useEffect } from 'react';
import ContactsList from 'templates/ContactsList';
import getContacts from 'api/contacts';
import Header from 'templates/Header';
import { Contact } from 'types';
import ContactsPageTitle from 'templates/ContactsPageTitle';

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
      <div className="mx-4 grow">
        <ContactsPageTitle />
        <ContactsList contacts={contacts} />
      </div>
    </div>

  );
}

export default ContactsPage;
