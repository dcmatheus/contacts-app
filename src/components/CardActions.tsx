import { Edit, Trash2 } from 'react-feather';

function CardActions() {
  return (
    <>
      <button type="button" className="flex">
        <Edit className="hidden mr-2 text-primary-100 md:block" />
        <p className="font-medium text-themeNeutral-600 md:text-inherit md:font-normal">Editar</p>
      </button>
      <button type="button" className="flex">
        <Trash2 className="text-delete" />
        <p className="hidden ml-2 font-normal xl:block">Excluir</p>
      </button>
      <p className="hidden xl:block" />
    </>
  );
}

export default CardActions;
