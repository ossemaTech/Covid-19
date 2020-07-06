import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {fetchData,
        fetchAllCountry,
        fetchDataBlog, 
        fetchDataQuetions, 
        fetchDataContact,
        fetchDataLinkWebsite}
from './Api';

import './App.css';

//Import Components Fixed Website
import Navbar from './Components/navbar/';
import Footer from './Components/footer/';

//Import All Pages
import Home from './Pages/Home/';
import About from './Pages/About/';
import Symptons from './Pages/Symptons/';
import Treatment from './Pages/Treatment/';
import Statistic from './Pages/Statistic/';
import ContactUs from './Pages/Contact/';


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

    fetchAllCountry('countries').then(country => {
      setState(p => {
        return {...p,country: country.data}
      })  
    });

    fetchDataBlog().then(blog => {
      setState(p => {
        return {...p, blog: blog}
      })
      
    });
    
    fetchDataQuetions().then(faq => {
      setState(p => {
        return {...p, faq: faq}
      }) 
    });

    fetchDataContact.apply().then(contact => {
      setState(p => {
        return {...p, setting: contact}
      })
    });

    fetchDataLinkWebsite.apply().then(info => {
      setState(p=> {
        return {...p, websiteInfo: info}
      })
    });

  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setState(p => {
      return {...p, data : fetchedData, countrie: country}
    })
    
  }

  return (
    <BrowserRouter>
      <Navbar logo={state.setting.logo}/>

      <Route exact path='/covid19' render={() => 
        <Home data = {state.data} 
        dataCountries={state.country} 
        blog = {state.blog.slice(0, 15)} 
        faq = {state.faq.slice(0, 9)}/>}  
      />

      <Route path='/about' render={() => 
        <About data = {state.data} 
          faq = {state.faq.slice(0, 9)}
        />}
      />

      <Route path='/symptons' render={() => <Symptons data = {state.data} />} />
      <Route path='/treatment' render={() => <Treatment data = {state.data} />} />
      <Route path='/statistic' render={() => 
        <Statistic data = {state.data} 
                   dataCountries={state.countrie}
                   handleCountryChange = {handleCountryChange}
                   allCountry = {state.country}
        />} 
      />
      <Route path='/Contact' render={() => <ContactUs data = {state.data} /> } />

      <Footer setting = {state.setting} websiteInfo={state.websiteInfo} />
    </BrowserRouter>
  );
}

export default App;
