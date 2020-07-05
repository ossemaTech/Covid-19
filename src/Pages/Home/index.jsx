import React from 'react';

//Import All Components Section Page Home
import Header from '../../Components/header';
import About from '../../Components/about';
import Symptons from '../../Components/symptons';
import Treatment from '../../Components/treatment'

function Home(props) {  
    
    return (
        <React.Fragment>
            <Header data = {props.data} />
            <About />
            <Symptons />
            <Treatment />
        </React.Fragment>
    );
}

export default Home;