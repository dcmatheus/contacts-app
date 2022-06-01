import { Contact } from 'types';
import ContactCard from './ContactCard';
import ContactsListHeader from './ContactsListHeader';

function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="grow">
      <ContactsListHeader contacts={contacts} />
      {contacts.map((contact, index) => (
        <ContactCard contact={contact} index={index} />
      ))}
    </div>
  );
}

export default ContactsList;
