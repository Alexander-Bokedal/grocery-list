import React, { useState } from 'react';
import './index.css';
import Body from './Components/Body';


function App() {
  const [activeMenu, setActiveMenu] = useState('add');

  return (
    <div className='app'>
      <Body setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </div>
  );
}

export default App;
