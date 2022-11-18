import React from 'react';
import { Input } from './styles';

interface IInputProps {
  inputValue: string;
}

function InputArea({ inputValue }: IInputProps) {
  return <Input value={inputValue} />;
}

export default InputArea;
