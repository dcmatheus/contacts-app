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
    <div className="flex flex-col items-center w-screen h-screen md:bg-themeNeutral-300">
      <Header path="/login" text="Listagem de usuários" />
      <div className="w-full md:bg-white lg:w-11/12 md:h-full md:rounded-lg md:my-7 md:shadow-md">
        <div className="flex flex-col mx-4 md:mx-10 grow">
          <ContactsPageTitle />
          <ContactsList contacts={contacts} />
        </div>
      </div>
    </div>

  );
}

export default ContactsPage;
