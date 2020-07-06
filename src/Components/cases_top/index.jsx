import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styles from './casesTop.module.css';

function SectionTopCases(props) {
    const {dataCountries} = props;

    let arrayMaxCases = [];

    dataCountries.map(item => arrayMaxCases.push(item.cases))

    arrayMaxCases = arrayMaxCases.sort(function(a, b){return b-a});

    arrayMaxCases = arrayMaxCases.slice(0,10); 

    
    return (
        <div className={styles.casesTop}>
            <Container>
                <div className={styles.headerTopCountry}>
                    <Row>
                        <Col md='6'>
                            <h5>Top 10 Countries</h5>
                        </Col>
                        <Col md='5'>
                            <Link to='/statistic' className={styles.linkStat}>
                                See All Countries <i className='fa fa-angle-double-right'></i>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md='12'>
                        <Table striped bordered hover responsive>
                            <thead className={styles.headerTable}>
                                <tr>
                                    <th className={styles.headingTab}>Country</th>
                                    <th>Case</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody className={styles.bodyTable}>
                                {arrayMaxCases.map((element, index) => { return (dataCountries.map(item => {
                                    if(item.cases === element) {
                                        return (
                                            <tr key={index}>
                                                <td className={styles.itemBodyTab}>
                                                    <img 
                                                        className={styles.flagCountry} 
                                                        src={item.countryInfo.flag} 
                                                        alt={item.country} 
                                                    />
                                                    <span className={styles.spanBodyTab}>{item.country}</span>
                                                </td>
                                                <td className={styles.cases}>{item.cases}</td>
                                                <td className={styles.deaths}>{item.deaths}</td>
                                            </tr>
                                        )
                                    }
                                }))})
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionTopCases;