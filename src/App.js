import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {fetchDataContact, fetchData} from './Api';

import './App.css';

//Import Components Fixed Website
import Navbar from './Components/navbar/';

//Import All Pages
import Home from './Pages/Home/';

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

    fetchData().then(dataAllWords => {
      setState(p => {
        return {...p,data: dataAllWords}
      })  
    });

    fetchDataContact.apply().then(contact => {
      setState(p => {
        return {...p, setting: contact}
      })
    });

}, []);

  return (
    <BrowserRouter>
      <Navbar logo={state.setting.logo}/>
      <Route exact path='/' render={() => 
        <Home data = {state.data} />}  
      />
    </BrowserRouter>
  );
}

export default App;
