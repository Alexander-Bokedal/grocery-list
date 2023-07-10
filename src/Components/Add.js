import React, { useState } from 'react';
import { AddButton, ClearButton } from './AddButtons';

function Add(props) {
  const { onListChange } = props;
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAddClick = () => {
    const newList = textInput.split('\n').map(item => ({
      name: item.toLowerCase().trim(),
      id: Date.now,
      sort: ''
    }));
    onListChange(newList);
    
    

    newList.forEach((item) => {
      console.log('Add line:', item);
    });
  };

  const handleClearClick = () => {
    setTextInput('');
    onListChange([]);
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
    </div>
  );
}

export default Add;
