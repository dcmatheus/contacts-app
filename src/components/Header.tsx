import { ArrowLeft, ChevronLeft } from 'react-feather';
import useBreakpoints from '../hooks/useBreakpoints';
import { HeaderProps } from '../types';
import { Header as HeaderStyle } from '../styles';

function Header({ text }: HeaderProps) {
  const { mdScreen } = useBreakpoints();
  return (
    <HeaderStyle>
      <button type="button" className="self-start text-themeNeutral-600">
        { mdScreen ? <ArrowLeft /> : <ChevronLeft /> }
        { mdScreen && <>Voltar</>}
      </button>
      { text && <p className="text-primary-200">{ text }</p> }
      <p />
    </HeaderStyle>
  );
}

export default Header;
