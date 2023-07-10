import React, { useState } from 'react';
import { AddButton, ClearButton } from './AddButtons';

function List(props) {
  const { list } = props;
  const { storeOrder } = props;
  const [display, setDisplay] = useState(list);

  const logList = () => {
    console.log(list);
    console.log(storeOrder);
  };

  const updateSortProperty = () => {
    const customOrder = [
      'misc',
      'baby',
      'bread',
      'cheese',
      'meat',
      'fruit',
      'dairy',
      'dry',
      'candy',
      'frozen',
      'drinks',
      'cleaning',
    ];

    const storeOrderMap = {};
    storeOrder.forEach((item) => {
      storeOrderMap[item.name] = item.sort;
    });

    const sortedList = [...list].sort((a, b) => {
      const sortA = customOrder.indexOf(storeOrderMap[a.name]);
      const sortB = customOrder.indexOf(storeOrderMap[b.name]);

      if (sortA === -1) return 1;
      if (sortB === -1) return -1;

      return sortA - sortB;
    });

    setDisplay(sortedList);
  };

  return (
    <div className="body">
      <h1>List</h1>
      <ul className='list-box'>
        {display.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
     
      <button className="add-button green" onClick={updateSortProperty}>
      Sort
    </button>
    </div>
  );
}

export default List;
