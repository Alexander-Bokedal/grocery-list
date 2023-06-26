import React, { useState } from 'react';

function Add() {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAddClick = () => {
    // Handle add logic here
    console.log('Add button clicked');
  };

  const handleClearClick = () => {
    setTextInput('');
  };

  return (
    <div className="body">
     <textarea
     className="text-input"
     value={textInput}
     rows={4} // Adjust the number of rows as needed
     wrap="soft" // Text wraps at the specified width
     onChange={handleInputChange}
     
/>

      <div className='buttons'>
      <button className="add-button green" onClick={handleAddClick}>Add</button>
      <button className="add-button red" onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
}

export default Add;
