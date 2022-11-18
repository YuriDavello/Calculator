import React, { useState } from 'react';
import { Container } from './styles';
import Keys from '../Keys';
import InputArea from '../InputArea';

function CalculatorArea() {
  const [inputValue, setInputValue] = useState('');
  return (
    <Container>
      <InputArea inputValue={inputValue} />
      <Keys setInputValue={setInputValue} />
    </Container>
  );
}

export default CalculatorArea;
