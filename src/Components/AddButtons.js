import React from 'react';

export function AddButton({ onClick }) {
  return (
    <button className="add-button green" onClick={onClick}>
      Add
    </button>
  );
}

export function ClearButton({ onClick }) {
  return (
    <button className="add-button red" onClick={onClick}>
      Clear
    </button>
  );
}
