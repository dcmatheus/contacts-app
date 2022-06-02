import { useMemo, useState } from 'react';
import { Contact } from 'types';
import { createContact, deleteContact as removeContact } from 'api/contacts';
import Context from './context';

function ContactsContext({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  async function addContact(newContact: Contact) {
    const token = localStorage.getItem('token') || '';
    console.log('teste');
    const response = await createContact(token, newContact);
    setContacts([...contacts, { ...newContact, id: response.id }]);
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
      setContacts,
      addContact,
      addContacts,
      deleteContact,
      editContact,
    }
  ), [contacts]);

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export default ContactsContext;
