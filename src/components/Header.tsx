import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft } from 'react-feather';
import useBreakpoints from '../hooks/useBreakpoints';
import { HeaderProps } from '../types';
import { Header as HeaderStyle } from '../styles';

function Header({ text, path }: HeaderProps) {
  const { mdScreen } = useBreakpoints();
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <button
        type="button"
        className="self-start text-themeNeutral-600"
        onClick={() => navigate(path)}
      >
        { mdScreen ? <ArrowLeft /> : <ChevronLeft /> }
        { mdScreen && <>Voltar</>}
      </button>
      { text && <p className="text-primary-200">{ text }</p> }
      <p />
    </HeaderStyle>
  );
}

export default Header;
