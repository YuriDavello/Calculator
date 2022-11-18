import React from 'react';
import { KeyNumber, Operator, Equal } from './styles';

interface IButtonProps {
  value: string;
  input: string;
  setInput: (inputValue: string) => void;
}

const operators = ['*', '/', '+', '-'];
const notNumberAndNotOperators = ['C', '.'];

function Button({ value, setInput, input }: IButtonProps) {
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
    <KeyNumber onClick={() => setInput(input + value)}>{value}</KeyNumber>
  ) : isEqual() ? (
    <Equal>{value}</Equal>
  ) : (
    <Operator>{value}</Operator>
  );
}

export default Button;
