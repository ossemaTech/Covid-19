import React from 'react';

//Import All Components Section Page Home
import Header from '../../Components/header';
import About from '../../Components/about';
import Symptons from '../../Components/symptons';
import Treatment from '../../Components/treatment';
import CounterTopCases from '../../Components/counter&TopCases';
import Blog from '../../Components/blog/';
import Contact from '../../Components/contact/';

function Home(props) {  
    
    return (
        <React.Fragment>
            <Header data = {props.data} />
            <About />
            <Symptons />
            <Treatment />
            <CounterTopCases lastUpdate = {props.data} dataCountries={props.dataCountries} />
            <Blog blog = {props.blog} />
            <Contact faq = {props.faq}/>
        </React.Fragment>
    );
}

export default Home;