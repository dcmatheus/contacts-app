import { Subtitle, Title } from 'styles';
import { PageTitleProps } from 'types';

function PageTitle({ title, subtitle, compact }: PageTitleProps) {
  const styles = compact ? 'flex items-center' : '';
  return (
    <div className={`text-center ${styles}`}>
      <Title compact={compact}>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </div>
  );
}

export default PageTitle;
