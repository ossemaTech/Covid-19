import React from 'react';

//Import All Components Section Page Home
import Header from '../../Components/header';


function Home(props) {  
    
    return (
        <React.Fragment>
            <Header data = {props.data} />
        </React.Fragment>
    );
}

export default Home;