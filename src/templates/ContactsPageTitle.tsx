import PageTitle from 'components/PageTitle';
import useBreakpoints from 'hooks/useBreakpoints';
import { Button } from 'styles';

function ContactsPageTitle() {
  const { mdScreen } = useBreakpoints();
  return (
    <div className="md:flex md:items-center md:justify-between md:w-full md:p-7 my-9 md:my-0">
      {
        mdScreen && <PageTitle title="Listagem de contatos" compact />
      }
      <Button className="md:w-auto md:bg-primary-100">
        {
          mdScreen ? 'Adicionar novo contato' : 'Cadastrar contato'
        }
      </Button>
    </div>
  );
}

export default ContactsPageTitle;
