import { Hash } from 'react-feather';
import useBreakpoints from 'hooks/useBreakpoints';
import { Contact } from 'types';
import HeaderCell from 'components/HeaderCell';
import { HeaderCellStyle } from 'styles';

function ContactsListHeader({ contacts }: { contacts: Contact[] }) {
  const { mdScreen } = useBreakpoints();
  const headerCells = [<Hash />, 'Nome', 'Telefone', 'Email'];
  return mdScreen ? (
    <div className="flex justify-between py-5 border-b-2 px-7 border-themeNeutral-500">
      {headerCells.map((cell, index) => (
        <HeaderCell minor={index === 0 || index === contacts.length - 1}>{cell}</HeaderCell>
      ))}
      <HeaderCellStyle className="w-1/6">
        Ações
      </HeaderCellStyle>
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
