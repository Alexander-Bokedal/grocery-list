import React, { useContext } from 'react';
import ListContext from './ListContext';

function List() {
  const list = useContext(ListContext);

  const logList = () => {
   console.log(list);
  };

  return (
    <div className="body">
     <button onClick={logList}>Console</button>
    
    </div>
  );
}

export default List;
