import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import styles from './about.module.css';

function SectionAbout() {
    return (
        <div className={styles.about}>
            <Container>
            <Row>
                <Col lg='6' md='12' className={styles.orderImgAbout}>
                    <div className={styles.aboutImg}>
                        <img className={styles.imgAbout} src={process.env.PUBLIC_URL + '/images/about_covid19.png'} alt="about_covid_19"/>
                    </div>
                </Col>
                <Col lg='6' md='12' className={styles.orderAbout}>
                    <span className={styles.spanTitle}>About Covid-19</span>
                    <h2 className={styles.titleAbout}>About Coronavirus Disease</h2>
                    <p className={styles.descAbout}>
                    In 2019, the Centers for Disease Control and Prevention (CDC) started monitoring 
                    the outbreak of a new coronavirus, SARS-CoV-2, which causes the respiratory illness 
                    now known as COVID-19. Authorities first identified the virus in Wuhan, China.
                    More than 78,191 people have contracted the virus in China. Health authorities have
                    identified many other people with COVID-19 around the world, including in the United
                    States. On January 31, 2020, the virus passed from one person to another in the U.S.
                    </p>
                    <p className={styles.blockquot}>
                        The World Health Organization (WHO) have declared a public
                        health emergency relating to COVID-19.
                    </p>
                    <p className={styles.descAbout}>
                        Since then, this strain has been diagnosed in several U.S. residents. The CDC 
                        have advised that it is likely to spread to more people. COVID-19 has started
                        causing disruption in at least 25 other countries.
                    </p>
                    <button className={styles.btnAbout}>MORE ABOUT</button>
                </Col>
            </Row>
            </Container>
        </div>
            
    )
}

export default SectionAbout;