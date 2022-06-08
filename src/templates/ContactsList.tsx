import { getContacts } from 'api/contacts';
import Context from 'Context/context';
import { useContext, useEffect } from 'react';
import ContactCard from './ContactCard';
import ContactsListHeader from './ContactsListHeader';

function ContactsList() {
  const { setContacts, contacts } = useContext(Context);

  useEffect(() => {
    getContacts().then((newContacts) => setContacts(newContacts));
  }, []);

  return (
    <div>
      <ContactsListHeader contacts={contacts} />
      <div>
        {contacts.map((contact, index) => (
          <ContactCard contact={contact} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
