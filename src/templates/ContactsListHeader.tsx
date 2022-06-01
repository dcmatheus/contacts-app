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
    <div className="flex justify-between font-medium">
      <p className="text-base text-themeNeutral-600">
        {`Total: ${contacts.length} contato${contacts.length > 1 ? 's' : ''}`}
      </p>
      <p className="text-sm text-primary-200">Ver Todos</p>
    </div>
  );
}

export default ContactsListHeader;
