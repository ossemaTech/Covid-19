import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Counter from '../counter';
import CasesTop from '../cases_top';

import styles from './counterTopCases.module.css';

function SectionCounterTopCases(props) {
    return (
        <div className={styles.counterTopCases}>
            <Container>
                <Row>
                    <Col lg='5' md='12'>
                        <Counter lastUpdate = {props.lastUpdate}/>
                    </Col>
                    <Col lg='7' md='12' className={styles.datatableCountry}>
                        <CasesTop dataCountries ={props.dataCountries} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionCounterTopCases;