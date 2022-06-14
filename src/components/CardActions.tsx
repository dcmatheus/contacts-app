import Context from 'context/context';
import { useContext } from 'react';
import { Edit, Trash2 } from 'react-feather';
import { useNavigate } from 'react-router-dom';

function CardActions({ id }: { id: number }) {
  const navigate = useNavigate();
  const { deleteContact } = useContext(Context);
  return (
    <>
      <button type="button" className="flex" onClick={() => navigate(`edit/${id}`)}>
        <Edit className="hidden mr-2 text-primary-100 md:block" />
        <p className="font-medium text-themeNeutral-600 md:text-inherit md:font-normal">Editar</p>
      </button>
      <button type="button" className="flex" onClick={() => deleteContact(id)}>
        <Trash2 className="text-delete" />
        <p className="hidden ml-2 font-normal xl:block">Excluir</p>
      </button>
      <p className="hidden xl:block" />
    </>
  );
}

export default CardActions;
