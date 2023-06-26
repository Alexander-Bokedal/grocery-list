
import React from 'react';
import './index.css'; 
import Body from './Components/Body';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Body />
    </div>
    </BrowserRouter>
  );
}

export default App;
