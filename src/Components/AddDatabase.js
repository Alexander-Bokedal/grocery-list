import React, { useState, useEffect } from 'react';

function AddDatabase(props) {
  const { display, handleAddSort, updateSortProperty } = props;
  const [showForm, setShowForm] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [alreadyExecuted, setAlreadyExecuted] = useState(false);

  useEffect(() => {
    if (!alreadyExecuted) {
      executeFunctionForEmptySort();
      setAlreadyExecuted(true);
      
    }
  }, [display, alreadyExecuted]);

  const executeFunctionForEmptySort = () => {
    for (let i = 0; i < display.length; i++) {
      const item = display[i];
      if (item.sort === undefined) {
        // Show the form with the dropdown menu
        setSelectedItem(item);
        setShowForm(true);
        break;
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedItem || !selectedSort) {
      return;
    }

    const updatedItem = { name: selectedItem.name, sort: selectedSort };
    console.log(updatedItem);

    handleAddSort(updatedItem);


    setSelectedSort('');
    setSelectedItem(null);
    setShowForm(false);

    
  };

  return (
    <div>
      {showForm ? (
        <form>
          <p>Selected Item: {selectedItem && selectedItem.name}</p>
          <select value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="">Select a sort value</option>
            <option value="misc">misc</option>
            <option value="baby">baby</option>
            <option value="bread">bread</option>
            <option value="cheese">cheese</option>
            <option value="meat">meat</option>
            <option value="fruit">fruit</option>
            <option value="dairy">dairy</option>
            <option value="dry">dry</option>
            <option value="candy">candy</option>
            <option value="frozen">frozen</option>
            <option value="drinks">drinks</option>
            <option value="cleaning">cleaning</option>
          </select>
          <button className="add-button green" onClick={handleSubmit}>
            Add
          </button>
        </form>
      ) : (
        <button className="add-button green" onClick={executeFunctionForEmptySort}>
          Fix unsorted
        </button>
      )}
    </div>
  );
}

export default AddDatabase;
