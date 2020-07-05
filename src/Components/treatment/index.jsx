import React from 'react';
import cx from 'classnames';
import {Container, Row, Col } from 'react-bootstrap';

import styles from './treatment.module.css';

function SectionTreatment() {
    return (
        <div className={styles.treatment}>
            <div className={styles.treatmentHeading}>
                <span className={styles.spanTitle}>DO’S & DON’TS</span>
                <h2 className={styles.titleTreat}>How to Protect Yourself?</h2>
                <p className={styles.descTreat}>
                    The best thing you can do now is plan for how you can adapt your daily routine.
                    Take few steps to protect yourself as Clean your hands often, Avoid close contact,
                    Cover coughs and sneezes, clean daily used surfaces etc.

                </p>
            </div>
            <div className={styles.treatProduct}>
                <Container>
                    <Row className={styles.flexlgNowrap}>
                        <Col md='8' xl='6' lg='5' className={styles.marginImg}>
                            <div className={styles.ImgTreatment}>
                                <img className={styles.imgPort} src={process.env.PUBLIC_URL + '/images/protect/treatment_Covid19.png'} alt="treatment_Covid19"/>
                            </div>
                        </Col>
                        <Col mb='5' sm='6' lg='4' xl='3' className={styles.leftIcontTreat}>
                            <div className={cx(styles.protectLeft, styles.firstLeftProt, styles.negative)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconLeft1.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Avoid Close Contact</h5>
                                </div>
                            </div>
                            <div className={cx(styles.protectLeft, styles.negative)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconLeft2.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Don’t Touch Face</h5>
                                </div>
                            </div>
                            <div className={cx(styles.protectLeft, styles.negative)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconLeft3.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Social Distancing</h5>
                                </div>
                            </div>
                        </Col>
                        <Col mb='5' sm='6' lg='4' xl='3' className={styles.rightIconTreat}>
                            <div className={cx(styles.protectLeft, styles.firstLeftProt,  styles.positive)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconRight1.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Wash Your Hands</h5>
                                </div>
                            </div>
                            <div className={cx(styles.protectLeft, styles.positive)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconRight2.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Drink Much Watar</h5>
                                </div>
                            </div>
                            <div className={cx(styles.protectLeft, styles.positive)}>
                                <div className={styles.protectGfx}>
                                    <img src={process.env.PUBLIC_URL + '/images/protect/protect_covid19_IconRight3.png'} alt='protect_Covid19'/>
                                </div>
                                <div className={styles.protectText}>
                                    <h5 className={styles.dosentProt}>Use Face Mask</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </div>
    )
}

export default SectionTreatment;