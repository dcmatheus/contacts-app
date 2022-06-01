import PageTitle from 'components/PageTitle';
import useBreakpoints from 'hooks/useBreakpoints';
import { Button } from 'styles';

function ContactsPageTitle() {
  const { mdScreen } = useBreakpoints();
  return (
    <div className="flex items-center justify-between w-full p-5 my-9">
      {
        mdScreen && <PageTitle title="Listagem de contatos" compact />
      }
      <Button className="md:w-auto">Cadastrar contato</Button>
    </div>
  );
}

export default ContactsPageTitle;
