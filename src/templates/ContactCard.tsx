import useBreakpoints from 'hooks/useBreakpoints';
import {
  Edit,
  Smartphone, Trash2,
} from 'react-feather';
import { Contact } from 'types';

function ContactCard({
  contact: {
    name, email, mobile, id,
  }, index,
}: { contact: Contact, index: number }) {
  const { mdScreen } = useBreakpoints();
  const style = (index / 2 === 0) ? 'bg-themeNeutral-400' : '';
  return mdScreen ? (
    <div key={id} className={`flex justify-between py-5 px-7 ${style}`}>
      <p className="w-1/12 font-bold text-primary-200">{id}</p>
      <p className="w-1/4 font-medium text-themeNeutral-700">{name}</p>
      <p className="w-1/4 font-medium text-themeNeutral-700">{mobile}</p>
      <p className="w-1/4 font-medium text-themeNeutral-700">{email}</p>
      <div className="flex w-1/6">
        <button type="button" className="flex">
          <Edit className="text-primary-100" />
          <p className="ml-2 font-normal">Editar</p>
        </button>
        <button type="button" className="flex ml-10">
          <Trash2 className="text-delete" />
          <p className="ml-2 font-normal">Excluir</p>
        </button>
      </div>
    </div>
  ) : (
    <div
      key={id}
      className="flex justify-between h-40 p-6 mt-4 border-2 rounded-lg"
    >
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
        <button type="button" className="font-medium text-themeNeutral-600">Editar</button>
        <button type="button">
          <Trash2 className="text-delete" />
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
