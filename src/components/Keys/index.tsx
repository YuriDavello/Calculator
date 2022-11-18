import React from 'react';
import { KeysContainer } from './styles';
import Button from '../Button';

function Keys(setInputValue: React.Dispatch<React.SetStateAction<string>>) {
  return (
    <KeysContainer>
      <Button value='7' />
      <Button value='8' />
      <Button value='9' />
      <Button value='*' />
      <Button value='4' />
      <Button value='5' />
      <Button value='6' />
      <Button value='/' />
      <Button value='1' />
      <Button value='2' />
      <Button value='3' />
      <Button value='+' />
      <Button value='.' />
      <Button value='0' />
      <Button value='C' />
      <Button value='-' />
      <Button value='=' />
    </KeysContainer>
  );
}

export default Keys;
