import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

//Import All Components Section Page Treatment
import Cover from '../../Components/cover';
import Counter from '../../Components/counter';
import SectionCases from '../../Components/SectionCasesAllPage';
import SectionChart from '../../Components/SectionChart';
import StaticAll from '../../Components/statistic';

import styles from './Statistic.module.css';


function Statistic(props) {
    return (
        <React.Fragment>
            <Cover />
            <div className={styles.CasesChart}>
                <Container>
                    <Row>
                        <Col lg='5' md='12'>
                            <Counter lastUpdate = {props.data}/>
                        </Col>
                        <Col lg='7' md='12'>
                            <SectionChart 
                                data = {props.data} 
                                country ={props.dataCountries} 
                                selectNameCountry = {props.allCountry}
                                handleCountryChange = {props.handleCountryChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <StaticAll selectAllCountry = {props.allCountry}/>
            <SectionCases data = {props.data} />
        </React.Fragment>
    )
}

export default Statistic;