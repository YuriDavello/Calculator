import React from 'react';
import { KeyNumber, Operator, Equal } from './styles';

interface IButtonProps {
  value: string;
  inputValue: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const operators = ['*', '/', '+', '-'];
const notNumberAndNotOperators = ['C', '.'];

function Button({ value, setInput, inputValue }: IButtonProps) {
  function isNumberOrNotOperator() {
    if (!isNaN(Number(value)) || notNumberAndNotOperators.includes(value))
      return true;

    return false;
  }

  function isEqual() {
    if (value === '=') return true;

    return false;
  }
  return isNumberOrNotOperator() ? (
    <KeyNumber onClick={() => setInput(inputValue + value)}>{value}</KeyNumber>
  ) : isEqual() ? (
    <Equal>{value}</Equal>
  ) : (
    <Operator>{value}</Operator>
  );
}

export default Button;
