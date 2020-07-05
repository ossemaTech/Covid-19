import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {fetchDataContact} from './Api';

import './App.css';

//Import Components Fixed Website
import Navbar from './Components/navbar/';

function App() {

  const [state, setState] = useState({
    data: {},
    country: [],
    blog: [],
    faq: [],
    setting: {},
    websiteInfo: [],
    countrie: '',
  })

  useEffect(() => {

    fetchDataContact.apply().then(contact => {
      setState(p => {
        return {...p, setting: contact}
      })
    });

}, []);

  return (
    <BrowserRouter>
      <Navbar logo={state.setting.logo}/>
    </BrowserRouter>
  );
}

export default App;
