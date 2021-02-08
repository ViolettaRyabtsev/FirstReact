import React from 'react'
import './App.css';

import { Link } from "@reach/router"
//import RenderLove from './love'
//import books from './books.json'


// <Switch>

//   <Route exact path="/love" component={RenderLove} />

// </Switch>

function App() {
  return (
    <div className="App">
      <Link to='/love'>love </Link>
      <Link to='/sex'>sex </Link>
      <Link to='/adventure'>adventure </Link>
    </div>
  )
}

export default App;
