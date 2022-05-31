import { ChevronDown, Hash } from 'react-feather';
import useBreakpoints from 'hooks/useBreakpoints';
import { Contact } from 'types';

function ContactsListHeader({ contacts }: { contacts: Contact[] }) {
  const { mdScreen } = useBreakpoints();
  return mdScreen ? (
    <div className="grid grid-cols-5">
      <div>
        <Hash />
        <ChevronDown />
      </div>
      <div>
        Nome
        <ChevronDown />
      </div>
      <div>
        Celular
        <ChevronDown />
      </div>
      <div>
        Email
        <ChevronDown />
      </div>
      <div>
        Ações
      </div>
    </div>
  ) : (
    <div>
      <p>
        {`Total: ${contacts.length} contato${contacts.length > 1 ? 's' : ''}`}
      </p>
      <p>Ver Todos</p>
    </div>
  );
}

export default ContactsListHeader;
