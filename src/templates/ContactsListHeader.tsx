import { Hash } from 'react-feather';
import useBreakpoints from 'hooks/useBreakpoints';
import { Contact } from 'types';
import HeaderCell from 'components/HeaderCell';
import { ContactsListHeaderStyle, HeaderCellStyle } from 'styles';

function ContactsListHeader({ contacts }: { contacts: Contact[] }) {
  const { mdScreen } = useBreakpoints();
  const headerCells = [<Hash />, 'Nome', 'Telefone', 'Email'];
  return mdScreen ? (
    <ContactsListHeaderStyle>
      {headerCells.map((cell, index) => (
        <HeaderCell sm={index === 0} key={`key-${cell}`}>{cell}</HeaderCell>
      ))}
      <HeaderCellStyle md="true">
        Ações
      </HeaderCellStyle>
    </ContactsListHeaderStyle>
  ) : (
    <ContactsListHeaderStyle>
      <p className="text-themeNeutral-600">
        {`Total: ${contacts.length} contato${contacts.length > 1 ? 's' : ''}`}
      </p>
      <p className="text-sm text-primary-200">Ver Todos</p>
    </ContactsListHeaderStyle>
  );
}

export default ContactsListHeader;
