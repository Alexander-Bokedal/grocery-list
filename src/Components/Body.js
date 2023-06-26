import React from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Add';
import List from './List';
import Edit from './Edit';

function Body() {
  return (
    <div>
      <nav className="navigation">
        <NavLink className="menu" to="/add" activeClassName="active">Add</NavLink>
        <NavLink className="menu" to="/list" activeClassName="active">List</NavLink>
        <NavLink className="menu" to="/edit" activeClassName="active">Edit</NavLink>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
