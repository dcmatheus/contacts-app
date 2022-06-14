import Contact from './contact';
import { ContactResponse } from './responses';

export interface ContactsContext {
  contacts: ContactResponse[];
  setContacts: (contacts: ContactResponse[]) => void;
  addContact: (newContact: Contact) => void;
  addContacts: (newContacts: ContactResponse[]) => void;
  deleteContact: (id: number) => void;
  editContact: (id: number, contact: Contact) => void;
}
