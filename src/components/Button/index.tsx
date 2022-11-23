import React from 'react';
import { KeyNumber, Operator, Equal } from './styles';

import { evaluate } from 'mathjs';

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

  function handleNumberOrNotNumberAndOperatorClick() {
    const lastInputCharacter = inputValue.charAt(inputValue.length - 1);

    if (isNumberOrNotOperator() && value !== '.') {
      setInput(inputValue + value);
    }

    if (value === 'C') setInput('');

    if (
      value === '.' &&
      lastInputCharacter !== '.' &&
      inputValue !== '' &&
      !operators.includes(lastInputCharacter)
    )
      setInput(inputValue + value);
  }

  function handleOperatorClick() {
    const lastInputCharacter = inputValue.charAt(inputValue.length - 1);
    if (
      operators.includes(lastInputCharacter) ||
      lastInputCharacter === '.' ||
      inputValue === ''
    )
      return;

    setInput(inputValue + value);
  }

  function isEqual() {
    if (value === '=') return true;

    return false;
  }

  function handleEqualClick() {
    if (!isNaN(Number(inputValue.charAt(inputValue.length - 1))).valueOf())
      setInput(String(evaluate(inputValue)));

    return;
  }

  return isNumberOrNotOperator() ? (
    <KeyNumber onClick={() => handleNumberOrNotNumberAndOperatorClick()}>
      {value}
    </KeyNumber>
  ) : isEqual() ? (
    <Equal onClick={handleEqualClick}>{value}</Equal>
  ) : (
    <Operator onClick={handleOperatorClick}>{value}</Operator>
  );
}

export default Button;
