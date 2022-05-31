import {
  Input, InputTitle,
} from '../styles';
import { InputLabelProps } from '../types';

function InputLabel({
  type, label, placeholder, value, change,
}: InputLabelProps) {
  return (
    <label>
      <InputTitle>{ label }</InputTitle>
      <Input type={type} placeholder={placeholder} value={value} onChange={change} />
    </label>
  );
}

export default InputLabel;
