import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import styles from './aboutMore.module.css';

function SectionAboutMore() {
    return (
    
        <div className={styles.aboutMore} style={{background: `url(${process.env.PUBLIC_URL + '/images/symptoms-bg.jpg'}) `}}>
            <Container>
                <Row>
                    <Col lg='6' md='12'>
                        <div className={styles.headingAbout}>
                            <span className={styles.spanTitle}>What are Covid-19?</span>
                            <h2 className={styles.titleAbout}>What is the Coronavirus COVID-19?</h2>
                        </div>
                        <p className={styles.descAbout}>
                            COVID-19 is a new strain of coronavirus that has not been previously identified in
                            humans. It was first identified in Wuhan, Hubei Province, China, where it has 
                            caused a large and ongoing outbreak. It has since spread more widely in China. 
                            Cases have since been identified in several other countries. The COVID-19 virus is
                            closely related to a bat coronavirus. 
                        </p>
                        <h4 className={styles.secondTitle}>SARS is Closely Related to the SARS-COV</h4>
                        <p className={styles.descAbout}>
                            Genetic analysis has revealed that the coronavirus genetically clusters with the
                            genus Betacoronavirus, in subgenus Sarbecovirus (lineage B) together with two
                            bat-derived strains. It is 96% identical at the whole genome level to other bat 
                            coronavirus samples (BatCov RaTG13).
                        </p>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className={styles.aboutMoreImg}>
                            <img className={styles.imgAboutmore} src={process.env.PUBLIC_URL + '/images/symptoms.png'} alt="about_covid_19"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
            
    )
}

export default SectionAboutMore;