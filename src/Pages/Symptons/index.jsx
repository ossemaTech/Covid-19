import React from 'react';
import {Container, Row, Col, Media } from 'react-bootstrap';

import styles from './SymptonsPage.module.css';

//Import All Components Section Page Symptons
import Cover from '../../Components/cover';
import SymptonsSection from '../../Components/symptons';
import SectionCases from '../../Components/SectionCasesAllPage';

function Symptons(props) {
    return (
        <React.Fragment>
            <Cover />
            <SymptonsSection />
            <SectionCases data = {props.data} />
            <div className={styles.symptonsInfo}>
                <Container>
                    <div className={styles.headingSympt}>
                        <span className={styles.spanSympt}>symptoms of COVID-19</span>
                        <h2 className={styles.titleSympt}>What are the basic symptoms?</h2>
                    </div>
                    <Row className={styles.symptonsInfoBlock}>
                        <Col lg='6' md='12' className={styles.firstItem}>
                            <div className={styles.itemSympt}>
                                <Media>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/symptoms-1.png'} alt="symptoms_covid19"
                                    />
                                    <Media.Body>
                                        <h5 className={styles.titleitem}>High fever</h5>
                                        <p className={styles.descitem}>
                                            Fever is a key symptom, experts say. Don't fixate on a number, 
                                            but know it's not a fever until temperature reaches at least 39°C. 
                                        </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className={styles.itemSympt}>
                                <Media>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/symptoms-2.png'} alt="symptoms_covid19"
                                    />
                                    <Media.Body>
                                    <h5 className={styles.titleitem}>High fever</h5>
                                        <p className={styles.descitem}>
                                            Fever is a key symptom, experts say. Don't fixate on a number, 
                                            but know it's not a fever until temperature reaches at least 39°C. 
                                        </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className={styles.itemSympt}>
                                <Media>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/symptoms-3.png'} alt="symptoms_covid19"
                                    />
                                    <Media.Body>
                                    <h5 className={styles.titleitem}>High fever</h5>
                                        <p className={styles.descitem}>
                                            Fever is a key symptom, experts say. Don't fixate on a number, 
                                            but know it's not a fever until temperature reaches at least 39°C. 
                                        </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </Col>
                        <Col lg='6' md='12' className={styles.lastItem}>
                            <div className={styles.itemSympt}>
                                <Media>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/symptoms-4.png'} alt="symptoms_covid19"
                                    />
                                    <Media.Body>
                                        <h5 className={styles.titleitem}>High fever</h5>
                                        <p className={styles.descitem}>
                                            Fever is a key symptom, experts say. Don't fixate on a number, 
                                            but know it's not a fever until temperature reaches at least 39°C. 
                                        </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Symptons;