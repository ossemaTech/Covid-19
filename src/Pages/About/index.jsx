import React from 'react';

//Import All Components Section Page About
import Cover from '../../Components/cover';
import AboutUs from '../../Components/about';
import AboutMore from '../../Components/aboutMore'
import SectionCases from '../../Components/SectionCasesAllPage';
import Contact from '../../Components/contact/';

function About(props) {
    return (
        <React.Fragment>
            <Cover />
            <AboutUs />
            <AboutMore />
            <SectionCases data = {props.data} />
            <Contact faq = {props.faq}/>
        </React.Fragment>
    )
}

export default About;