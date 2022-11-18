import React from 'react';
import { KeysContainer } from './styles';
import Button from '../Button';

interface IKeysProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

function Keys({ setInput, inputValue }: IKeysProps) {
  return (
    <KeysContainer>
      <Button value='7' setInput={setInput} inputValue={inputValue} />
      <Button value='8' setInput={setInput} inputValue={inputValue} />
      <Button value='9' setInput={setInput} inputValue={inputValue} />
      <Button value='*' setInput={setInput} inputValue={inputValue} />
      <Button value='4' setInput={setInput} inputValue={inputValue} />
      <Button value='5' setInput={setInput} inputValue={inputValue} />
      <Button value='6' setInput={setInput} inputValue={inputValue} />
      <Button value='/' setInput={setInput} inputValue={inputValue} />
      <Button value='1' setInput={setInput} inputValue={inputValue} />
      <Button value='2' setInput={setInput} inputValue={inputValue} />
      <Button value='3' setInput={setInput} inputValue={inputValue} />
      <Button value='+' setInput={setInput} inputValue={inputValue} />
      <Button value='.' setInput={setInput} inputValue={inputValue} />
      <Button value='0' setInput={setInput} inputValue={inputValue} />
      <Button value='C' setInput={setInput} inputValue={inputValue} />
      <Button value='-' setInput={setInput} inputValue={inputValue} />
      <Button value='=' setInput={setInput} inputValue={inputValue} />
    </KeysContainer>
  );
}

export default Keys;
