import React, { useState } from 'react';
import Add from './Add';
import List from './List';
import Edit from './Edit';

function Body() {
  const [list, setList] = useState([]);
  const [activeMenu, setActiveMenu] = useState('add');
  const [storeOrder, setStoreOrder] = useState([]);

  const renderMenu = () => {
    switch (activeMenu) {
      case 'add':
        return <Add onListChange={setList} />;
      case 'list':
        return <List list={list} storeOrder={storeOrder}/>;
      case 'edit':
        return <Edit orderList={setStoreOrder} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="navigation">
        <div
          className={`menu ${activeMenu === 'add' ? 'active' : ''}`}
          onClick={() => setActiveMenu('add')}
        >
          Add
        </div>
        <div
          className={`menu ${activeMenu === 'list' ? 'active' : ''}`}
          onClick={() => setActiveMenu('list')}
        >
          List
        </div>
        <div
          className={`menu ${activeMenu === 'edit' ? 'active' : ''}`}
          onClick={() => setActiveMenu('edit')}
        >
          Edit
        </div>
      </nav>
      {renderMenu()}
    </div>
  );
}

export default Body;
