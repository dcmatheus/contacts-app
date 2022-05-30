import {
  Input, InputTitle,
} from '../styles';
import { InputLabelProps } from '../types';

function InputLabel({ type, label, placeholder }: InputLabelProps) {
  return (
    <label>
      <InputTitle>{ label }</InputTitle>
      <Input type={type} placeholder={placeholder} />
    </label>
  );
}

export default InputLabel;
