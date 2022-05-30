import { Subtitle, Title } from '../styles';
import { PageTitleProps } from '../types';

function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <fieldset className="text-center">
      { title && <Title>{ title }</Title> }
      { subtitle && <Subtitle>{ subtitle }</Subtitle> }
    </fieldset>
  );
}

export default PageTitle;
