import useBreakpoints from 'hooks/useBreakpoints';
import { Smartphone } from 'react-feather';
import {
  ContactCardStyle, TableCell, TableLine,
} from 'styles';
import { Contact } from 'types';
import CardActions from 'components/CardActions';

function ContactCard({
  contact: {
    name, email, mobile, id,
  }, index,
}: { contact: Contact, index: number }) {
  const { mdScreen } = useBreakpoints();
  const cells = [id, name, mobile, email, <CardActions id={id} />];
  return mdScreen ? (
    <TableLine key={id} dark={(index % 2 === 0)}>
      {cells.map((cell, i) => (
        <TableCell start={i === 0} end={i === cells.length - 1}>{cell}</TableCell>
      ))}
    </TableLine>
  ) : (
    <ContactCardStyle key={id}>
      <div className="flex flex-col justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm font-medium text-themeNeutral-600">{email}</p>
        </div>
        <div className="flex items-center">
          <Smartphone />
          <p className="ml-2 font-medium">{mobile}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <CardActions id={id} />
      </div>
    </ContactCardStyle>
  );
}

export default ContactCard;
