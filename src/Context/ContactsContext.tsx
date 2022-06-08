import { useMemo, useState } from 'react';
import { ContactResponse, Contact } from 'types';
import { createContact, deleteContact as removeContact, updateContact } from 'api/contacts';
import Context from './context';

function ContactsContext({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<ContactResponse[]>([]);

  async function addContact(newContact: Contact) {
    const response = await createContact(newContact);
    setContacts([...contacts, { ...newContact, id: response.id }]);
  }

  function addContacts(newContacts: ContactResponse[]) {
    setContacts([...contacts, ...newContacts]);
  }

  async function deleteContact(id: number) {
    await removeContact(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  async function editContact(id: number, editedContact: Contact) {
    await updateContact(id, editedContact);
    setContacts(contacts.map((contact) => (
      contact.id === id ? { ...editedContact, id } : contact
    )));
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
