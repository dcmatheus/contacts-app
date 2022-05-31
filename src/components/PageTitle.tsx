import { Subtitle, Title } from 'styles';
import { PageTitleProps } from 'types';

function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <fieldset className="text-center">
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </fieldset>
  );
}

export default PageTitle;
