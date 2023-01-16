import React from 'react';

import './App.css';
import Calculator from "../Calculator/Calculator";

const App = () => {
  return (
    <div data-testid="app" role="presentation" className="app-container">
      <Calculator />
    </div>
  )
};

export default App;
