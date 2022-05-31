import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft } from 'react-feather';
import useBreakpoints from '../hooks/useBreakpoints';
import { HeaderProps } from '../types';
import { BackButton, HeaderStyle } from '../styles';

function Header({ text, path }: HeaderProps) {
  const { mdScreen } = useBreakpoints();
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <BackButton onClick={() => navigate(path)}>
        { mdScreen ? <ArrowLeft className="mr-2 h-7" /> : <ChevronLeft /> }
        { mdScreen && <p>Voltar</p>}
      </BackButton>
      { text && !mdScreen && <p className="text-primary-200">{ text }</p> }
      <p />
    </HeaderStyle>
  );
}

export default Header;
