import { ChevronDown } from 'react-feather';
import { HeaderCellStyle } from 'styles';
import { HeaderCellProps } from 'types';

function HeaderCell({ children, sm, md }: HeaderCellProps) {
  return (
    <HeaderCellStyle sm={sm ? 'true' : undefined} md={md ? 'true' : undefined}>
      {children}
      <ChevronDown />
    </HeaderCellStyle>
  );
}

HeaderCell.defaultProps = {
  sm: false,
  md: false,
};

export default HeaderCell;
