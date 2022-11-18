import React from 'react';
import './AppStyles.tsx';

import { Body } from './AppStyles';
import CalculatorArea from './components/CalculatorArea';

function App() {
  return (
    <>
      <Body>
        <CalculatorArea />
      </Body>
    </>
  );
}

export default App;
