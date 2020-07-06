import React from 'react';
import {Container, Row, Col, Media } from 'react-bootstrap';

import styles from './spreads.module.css';

function SectionSpreads() {
    return (
        <div className={styles.Spread}>
            <Container>
                <Row>
                    <Col lg='6' md='12'>
                    <div className={styles.headingSpread}>
                            <span className={styles.spanSpread}>Spreads</span>
                            <h2 className={styles.titleSpread}>How Covid-19 Spreads?</h2>
                            <p className={styles.descSpread}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='6' md='12'>
                        <div className={styles.cadreSpread}>
                            <Media>
                                <div className={styles.iconSpread}>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/spreads/spreadOne.png'} alt="spreads_covid19"
                                    />
                                </div>
                                <Media.Body>
                                    <h5 className={styles.titleitem}>Human Contact</h5>
                                    <p className={styles.descCadre}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                        do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </Media.Body>
                            </Media>
                        </div>
                        <div className={styles.cadreSpread}>
                            <Media>
                                <div className={styles.iconSpread}>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/spreads/spreadTwo.png'} alt="spreads_covid19"
                                    />
                                </div>
                                <Media.Body>
                                    <h5 className={styles.titleitem}>Human Contact</h5>
                                    <p className={styles.descCadre}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                        do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </Media.Body>
                            </Media>
                        </div>
                        <div className={styles.cadreSpread}>
                            <Media>
                                <div className={styles.iconSpread}>
                                    <img
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + '/images/spreads/spreadThree.png'} alt="spreads_covid19"
                                    />
                                </div>
                                <Media.Body>
                                    <h5 className={styles.titleitem}>Human Contact</h5>
                                    <p className={styles.descCadre}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                        do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </Media.Body>
                            </Media>
                        </div>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className={styles.imgSpread}>
                            <img src={process.env.PUBLIC_URL + '/images/spreads/spread.png'} alt='spreads_covid19'/>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionSpreads;