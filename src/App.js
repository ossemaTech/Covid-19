import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

//Import Components Fixed Website
import Navbar from './Components/navbar/';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
