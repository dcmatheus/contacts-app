import { createContext } from 'react';
import { ContactsContext } from 'types';

const Context = createContext<ContactsContext>({
  contacts: [],
  addContact: () => {},
  addContacts: () => {},
  deleteContact: () => {},
  editContact: () => {},
});

export default Context;
