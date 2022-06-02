import { getContacts } from 'api/contacts';
import Context from 'Context/context';
import { useContext, useEffect } from 'react';
import ContactCard from './ContactCard';
import ContactsListHeader from './ContactsListHeader';

function ContactsList() {
  const { addContacts, contacts } = useContext(Context);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getContacts(token).then((newContacts) => addContacts(newContacts));
    }
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
