
import './index.css'; 
import Body from './Components/Body';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Add from './Components/Add';
import List from './Components/List';
import Edit from './Components/Edit';

function App() {
  return (
   
    <div className='app'>
      <Body />
    
    </div>
   
  );
}

export default App;
