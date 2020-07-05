import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import styles from './symptons.module.css';

function SectionSymptons() {
    return (
        <div className={styles.symptons}>
            <Container>
            <Row>
                <Col lg='6' md='12'>
                    <span className={styles.spanTitle}>Symptons Covid-19</span>
                    <h2 className={styles.titleSymptons}>What Are The Main Symptoms?</h2>
                    <p className={styles.descSymptons}>
                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients
                    may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These 
                    symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after 
                    exposure.
                    </p>
                    <Row>
                        <Col md='5'>
                            <div className={styles.someSymptons}>
                                <i className='fa fa-check'></i>
                                <span>Cough</span>
                            </div>
                        </Col>
                        <Col md='5'>
                            <div className={styles.someSymptons}>
                                <i className='fa fa-check'></i>
                                <span>Fever</span>
                            </div>
                        </Col>
                        <Col md='5'>
                            <div className={styles.someSymptons}>
                                <i className='fa fa-check'></i>
                                <span>Tiredness</span>
                            </div>
                        </Col>
                        <Col md='5'>
                            <div className={styles.someSymptons}>
                                <i className='fa fa-check'></i>
                                <span>Headache</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6' md='12'>
                    <div className={styles.symptImg}>
                        <img className={styles.imgSympt} src={process.env.PUBLIC_URL + '/images/symptoms_Covid19.png'} alt="symptons_covid_19"/>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default SectionSymptons;