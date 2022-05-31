import { Contact } from 'types';

function ContactCell({
  contact: {
    name, email, mobile, id,
  },
}: { contact: Contact }) {
  return (
    <div key={id}>
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{mobile}</p>
        <p>{email}</p>
      </div>
      <div>
        <button type="button">Editar</button>
        <button type="button">Excluir</button>
      </div>
    </div>
  );
}

export default ContactCell;
