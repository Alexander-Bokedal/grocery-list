import React, { useState, useEffect } from 'react';
import { AddButton, ClearButton } from './AddButtons';
import AddDatabase from './AddDatabase';

function List(props) {
  const { list } = props;

  const [display, setDisplay] = useState(list);
  const [storeOrder, setStoreOrder] = useState([]);

  const logList = () => {
    console.log(display);
  };

  useEffect(() => {
    const getOrder = async () => {
      const orderFromServer = await fetchOrder();
      setStoreOrder(orderFromServer);
    };

    getOrder();
    
  }, [display]);

  useEffect(() => {
    updateSortProperty();
  }, [storeOrder]);

  // fetch order
  const fetchOrder = async () => {
    const res = await fetch('http://localhost:5000/order');
    const data = await res.json();
    return data;
  };

  const handleAddSort = async (updatedItem) => {
    try {
      const res = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
      });

      if (!res.ok) {
        throw new Error('Failed to add the sort value to the database.');
      }

      const data = await res.json();
      console.log('Data added:', data);

      // Update the displayed list with the newly added item and its sort property
      setDisplay((prevDisplay) => [...prevDisplay, data]);

      
    } catch (error) {
      console.error('Error adding sort value to the database:', error);
    }
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
      'cleaning'
    ];

    const storeOrderMap = {};
    storeOrder.forEach((item) => {
      storeOrderMap[item.name] = item.sort;
    });

    const sortedList = [...display].sort((a, b) => {
      const sortA = customOrder.indexOf(storeOrderMap[a.name]);
      const sortB = customOrder.indexOf(storeOrderMap[b.name]);

      if (sortA === -1) return 1;
      if (sortB === -1) return -1;

      return sortA - sortB;
    });

    const updatedSortedList = [];
    const itemSet = new Set();

    sortedList.forEach((item) => {
      if (!itemSet.has(item.name)) {
        updatedSortedList.push({
          ...item,
          sort: storeOrderMap[item.name]
        });
        itemSet.add(item.name);
      }
    });

    setDisplay(updatedSortedList);
  };

  return (
    <div className="body">
      <h1>List</h1>
      <ul className="list-box">
        {display.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <button className="add-button green" onClick={updateSortProperty}>
        Sort
      </button>
      <button onClick={logList}>Console</button>
      <AddDatabase handleAddSort={handleAddSort} display={display} updateSortProperty={updateSortProperty} />
    </div>
  );
}

export default List;
