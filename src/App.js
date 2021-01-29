import React from 'react'
import './App.css';
import { NavLink } from "react-router-dom";
function App() {
  return (
    <nav className='App'>
      <NavLink exact activeClassName="active" to="/"> Love
      </NavLink>
      <NavLink exact activeClassName="active" to="/"> Sex
      </NavLink>
      <NavLink exact activeClassName="active" to="/"> Adventure
      </NavLink>
    </nav>
  )
}

export default App;
