import { useMemo, useState } from 'react';
import { Contact } from 'types';
import { deleteContact as removeContact } from 'api/contacts';
import Context from './context';

function ContactsContext({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  function addContact(newContact: Contact) {
    setContacts([...contacts, newContact]);
  }

  function addContacts(newContacts: Contact[]) {
    setContacts([...contacts, ...newContacts]);
  }

  async function deleteContact(id: number) {
    setContacts(contacts.filter((contact) => contact.id !== id));
    const token = localStorage.getItem('token') || '';
    await removeContact(token, id);
  }

  function editContact(id: number, editedContact: Contact) {
    setContacts(contacts.map((contact) => (contact.id === id ? editedContact : contact)));
  }

  const values = useMemo(() => (
    {
      contacts,
      addContact,
      addContacts,
      deleteContact,
      editContact,
    }
  ), []);

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export default ContactsContext;
