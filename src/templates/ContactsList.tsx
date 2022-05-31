import { Contact } from 'types';
import ContactCell from './ContactCell';
import ContactsListHeader from './ContactsListHeader';

function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <div>
      <ContactsListHeader contacts={contacts} />
      {contacts.map((contact) => (
        <ContactCell contact={contact} />
      ))}
    </div>
  );
}

export default ContactsList;
