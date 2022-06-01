import { ChevronDown } from 'react-feather';
import { HeaderCellStyle } from 'styles';

function HeaderCell({ children, minor }: { children: React.ReactNode, minor?: Boolean }) {
  return (
    <HeaderCellStyle minor={minor}>
      {children}
      <ChevronDown />
    </HeaderCellStyle>
  );
}

HeaderCell.defaultProps = {
  minor: false,
};

export default HeaderCell;
