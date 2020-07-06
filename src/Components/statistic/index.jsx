import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import cx from 'classnames';

import styles from './statistic.module.css';

function SectionStatistic(props) {
    const {selectAllCountry} = props;

    let arrayMaxCases = [];

    selectAllCountry.map(item => arrayMaxCases.push(item.cases))

    arrayMaxCases = arrayMaxCases.sort(function(a, b){return b-a});

    return (
        <div className={styles.statisticAll}>
            <Container>
                <Row>
                    <Col md='12'>
                        <Table striped bordered hover responsive>
                            <thead className={styles.headerTable}>
                                <tr>
                                    <th className={styles.headingTab}>#</th>
                                    <th className={styles.headingTab}>Countries of the World</th>
                                    <th className={styles.headingTab}>Total cases</th>
                                    <th className={styles.headingTab}>New Cases</th>
                                    <th className={styles.headingTab}>Total Deaths</th>
                                    <th className={styles.headingTab}>New Deaths</th>
                                    <th className={styles.headingTab}>Total Recovered</th>
                                    <th className={styles.headingTab}>New Recovered</th>
                                    <th className={styles.headingTab}>Active Cases</th>
                                    <th className={styles.headingTab}>Serious Critical</th>
                                    <th className={styles.headingTab}>Total Tests</th>
                                </tr>
                            </thead>
                            <tbody className={styles.bodyTable}>
                                {arrayMaxCases.map((element, index) => { return (selectAllCountry.map(item => {
                                if(item.cases === element) {
                                    return (
                                        <tr key={index}>
                                            <td className={styles.itemBodyTab}>{index}</td>
                                            <td className={styles.itemBodyTab}>
                                                <img 
                                                    className={styles.flagCountry} 
                                                    src={item.countryInfo.flag} 
                                                    alt={item.country} 
                                                />
                                                <span className={cx(styles.spanBodyTab, styles.itemBodyTab)}>{item.country}</span>
                                            </td>
                                            <td className={cx(styles.itemBodyTab,styles.cases)}>{item.cases}</td>
                                            <td className={cx(styles.itemBodyTab,styles.newCases)}>+{item.todayCases}</td>
                                            <td className={cx(styles.itemBodyTab,styles.deaths)}>{item.deaths}</td>
                                            <td className={cx(styles.itemBodyTab,styles.newDeaths)}>+{item.todayDeaths}</td>
                                            <td className={cx(styles.itemBodyTab,styles.recovered)}>{item.recovered}</td>
                                            <td className={cx(styles.itemBodyTab,styles.newRecovered)}>+{item.todayRecovered}</td>
                                            <td className={cx(styles.itemBodyTab,styles.activeCases)}>{item.active}</td>
                                            <td className={cx(styles.itemBodyTab,styles.critical)}>{item.critical}</td>
                                            <td className={cx(styles.itemBodyTab,styles.test)}>{item.tests}</td>
                                        </tr>
                                    )
                                    }
                                    
                                }
                                )
                                )
                                }
                                )

                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionStatistic;