import React from 'react';
import {Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import CountUp from 'react-countup';
import { Doughnut } from "react-chartjs-2";

import styles from './counter.module.css';

function SectionCounter({lastUpdate : {cases, recovered, deaths, todayCases, todayDeaths, affectedCountries, updated}}) {
    
    let totalCases = 0,
        totalRecover = 0,
        totalDeaths = 0,
        newCases = 0,
        newDeaths = 0,
        affCountry = 0;

    if(!cases && !recovered && !deaths) {
        return 'loading...';
    }else {
        totalCases = cases;
        totalRecover = recovered;
        totalDeaths = deaths;
        newCases = todayCases;
        newDeaths = todayDeaths;
        affCountry = affectedCountries;
    }

    const datapie = {
            labels: [totalCases, totalDeaths, totalRecover],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#50658e',
                  '#ff4e5b',
                  '#007bff'
                ],
                hoverBackgroundColor: [
                '#50658e',
                '#ff4e5b',
                '#007bff'
                ],
                data: [6278606, 374158, 2852761]
              }
            ]
    }
    
    return (
        <div className={styles.counter}>
            <div className={styles.dateUpdateCases}>
                <span>Last Update :</span>
                <strong>{new Date(updated).toUTCString()}</strong>
            </div>
            <Row>
                <Col xl='6' lg='6' md='6'>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientCases)}>
                            <i className='fa fa-users'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>Total Cases</h5>
                            <h3><CountUp start={0} end={totalCases} duration={3} separator=',' /></h3>
                        </div>
                    </div>
                </Col>
                <Col xl='6' lg='6' md='6'>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientDeaths)}>
                            <i className='fa fa-ambulance'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>Total Deaths</h5>
                            <h3><CountUp start={0} end={totalDeaths} duration={3} separator=',' /></h3>
                        </div>
                    </div>
                </Col>
                <Col xl='6' lg='6' md='6'>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientRecov)}>
                            <i className='fa fa-heartbeat'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>Total Recovered</h5>
                            <h3><CountUp start={0} end={totalRecover} duration={3} separator=',' /></h3>
                        </div>
                    </div>
                </Col>
                <Col xl='6' lg='6' md='6'>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientNewCase)}>
                            <i className='fa fa-bell'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>New Cases</h5>
                            <h3><CountUp start={0} end={newCases} duration={3} separator=',' /></h3>
                        </div>
                    </div>
                </Col>
                <Col xl='6' lg='6' md='6'>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientNewDeath)}>
                            <i className='fa fa-bed'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>New Death</h5>
                            <h3><CountUp start={0} end={newDeaths} duration={3} separator=',' /></h3>
                        </div>
                    </div>
                    <div className={styles.worldWidget}>
                        <div className={cx(styles.icon, styles.gradientCountries)}>
                            <i className='fa fa-institution'></i>
                        </div>
                        <div className={styles.nbrCases}>
                            <h5>Countries</h5>
                            <h3><CountUp start={0} end={affCountry} duration={3} separator=',' /></h3>
                        </div>
                    </div> 
                </Col>
                <Col xl='6' lg='6' md='6'>
                    <Doughnut
                        data={datapie}
                        width={280}
                        height={200}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend:{
                                display:true,
                                position:'bottom',
                            }
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default SectionCounter;