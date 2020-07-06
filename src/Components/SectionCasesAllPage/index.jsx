import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import styles from './sectionCasesAllPage.module.css';

function SectionCasesAllPage({data : {cases, recovered, deaths, affectedCountries}}) {
    let valueCases = 0,
        valueRecover = 0,
        valueDeaths = 0,
        valueCountries = 0;
    
    if(!cases && !recovered && !deaths && !affectedCountries) {
        return 'loading...';
    }else {
        valueCases = cases;
        valueRecover = recovered;
        valueDeaths = deaths;
        valueCountries = affectedCountries;
    }

    return (
        <div className={styles.sectionCases}>
            <div className={styles.headingCases}>
                <span className={styles.spanTitle}>Cases Covid-19</span>
                <h1 className={styles.titleSection}>Total Corona Statistics</h1>
            </div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className={styles.typeCases}>
                            <div className={styles.iconCases}>
                                <img className={styles.imgCases} src={process.env.PUBLIC_URL + "/images/iconCases/confirmed.svg"} alt='total_confirmed_corona' />
                            </div>
                            <h2 className={styles.nbrtotal}>{valueCases}</h2>
                            <h6 className={styles.titleTotal}>Totla Confirmed</h6>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className={styles.typeCases}>
                            <div className={styles.iconCases}>
                                <img className={styles.imgCases} src={process.env.PUBLIC_URL + "/images/iconCases/country.svg"} alt='total_countries_have_coronavirus' />
                            </div>
                            <h2 className={styles.nbrtotal}>{valueCountries}</h2>
                            <h6 className={styles.titleTotal}>Countries/Regions</h6>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className={styles.typeCases}>
                            <div className={styles.iconCases}>
                                <img className={styles.imgCases} src={process.env.PUBLIC_URL + "/images/iconCases/recoverd.svg"} alt='recoverd_corona' />
                            </div>
                            <h2 className={styles.nbrtotal}>{valueRecover}</h2>
                            <h6 className={styles.titleTotal}>Total Recoverd</h6>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className={styles.typeCases}>
                            <div className={styles.iconCases}>
                                <img className={styles.imgCases} src={process.env.PUBLIC_URL + "/images/iconCases/rip.svg"} alt='confirmed_deaths_covid19' />
                            </div>
                            <h2 className={styles.nbrtotal}>{valueDeaths}</h2>
                            <h6 className={styles.titleTotal}>Confirmed Deaths</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionCasesAllPage;