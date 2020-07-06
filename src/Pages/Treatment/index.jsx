import React from 'react';

//Import All Components Section Page Treatment
import Cover from '../../Components/cover';
import TreatmentSection from '../../Components/treatment';
import SectionCases from '../../Components/SectionCasesAllPage';
import SectionSpreads from '../../Components/spreads';

function Treatment(props) {
    return (
        <React.Fragment>
            <Cover />
            <SectionSpreads />
            <TreatmentSection />
            <SectionCases data = {props.data} />
        </React.Fragment>
    )
}

export default Treatment;