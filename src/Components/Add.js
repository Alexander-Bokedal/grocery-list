import React, { useState } from 'react';
import { AddButton, ClearButton } from './AddButtons';
import List from './List';
import ListContext from './ListContext';

function Add() {
  const [textInput, setTextInput] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAddClick = () => {
    const newList = textInput.split('\n');
    setList(newList);

    newList.forEach((item) => {
      console.log('Add line:', item.toLowerCase().trim());
    });
  };

  const handleClearClick = () => {
    setTextInput('');
    setList([]);
  };

  return (
    <div className="body">
      <textarea
        className="text-input"
        value={textInput}
        rows={4}
        wrap="soft"
        onChange={handleInputChange}
      />

      <div className='buttons'>
        <AddButton className="add-button green" onClick={handleAddClick}>Add</AddButton>
        <ClearButton className="add-button red" onClick={handleClearClick}>Clear</ClearButton>
      </div>
      <ListContext.Provider value={list}>
       <List />
      </ListContext.Provider>
      
    </div>
  );
}

export default Add;
