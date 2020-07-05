import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

import styles from './header.module.css';

function SectionHeader({data : {cases, recovered, deaths, updated}}) {
    
    let valueCases = 0,
        valueRecover = 0,
        valueDeaths = 0;
    
    if(!cases && !recovered && !deaths) {
        return 'loading...';
    }else {
        valueCases = cases;
        valueRecover = recovered;
        valueDeaths = deaths;
    }

    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col lg='5' className={styles.orderImglg}>
                        <div className={styles.imageHeader}>
                            <img src={process.env.PUBLIC_URL + '/images/header_covid19.png'} alt='covid-19'/>
                        </div>
                    </Col>
                    <Col lg='6' className={styles.headerInfo}>
                        <h1 className={styles.heading}>
                            <span>CORONA</span>
                            <span className={styles.headingSmall}>
                                <span className={styles.covid}>COVID-19</span>
                                <span>LIVE UPDATE</span>
                            </span>
                        </h1>
                        <p className={styles.descriptHeader}>
                        The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019,
                        the outbreak was later recognized as a pandemic by the W.H.O on 11 March 2020.
                        </p>
                        <button className={styles.bntStatistic}>Statistic Covid-19</button>
                        <button className={styles.btnNews}><span>News WHO</span></button> 
                        <div className={styles.casesWorld}>
                            <Row>
                                <Col sm='4'>
                                    <h6 className={styles.titleCases}>INFECTED CASES</h6>
                                    <h3 className={styles.numberCases}>
                                        <CountUp start={0} end={valueCases} duration={3} separator=',' />
                                    </h3>
                                </Col>
                                <Col sm='4'>
                                    <h6 className={styles.titleCases}>DEATHS</h6>
                                    <h3 className={styles.numberCases}>
                                        <CountUp start={0} end={valueDeaths} duration={3} separator=',' />
                                    </h3>
                                </Col>
                                <Col sm='4'>
                                    <h6 className={styles.titleCases}>RECOVERED</h6>
                                    <h3 className={styles.numberCases}>
                                        <CountUp start={0} end={valueRecover} duration={3} separator=',' />
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                    <p className={styles.lastupdate}>Last updated: {new Date(updated).toUTCString()}</p>
            </Container>
        </div>
    )
}

export default SectionHeader;