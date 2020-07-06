import React, {useState, useEffect} from 'react';
import {Container, Form } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../Api';

import styles from './sectionChart.module.css';

const SectionChart = ({data : {cases, recovered, deaths}, country, selectNameCountry, handleCountryChange}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi();
    }, []);
    
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
    
    const lineChart = (
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        layout: {padding : 50},
                        label: 'Infected',
                        backgroundColor: '#007bff',
                        borderColor: '#f7f7f7',
                        fil: true
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        backgroundColor: '#ff4e5b',
                        borderColor: '#f7f7f7',
                        file: true
                    },
                    {
                        data: dailyData.map(({recovered}) => recovered),
                        label: 'Recovered',
                        backgroundColor: '#2ECBAC',
                        borderColor: '#f7f7f7',
                        file: true
                    }],

                }}
            />
        ): null
    );

    const barChar = (
        valueCases 
        ? (
            <Bar 
                data= {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label:'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data: [valueCases, valueRecover, valueDeaths]
                    }]
                }}

                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current State in ${country}`},
                }}
            />
        ): null
    )

    return (
        <div className={styles.staticChart}>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Control as="select" onChange={(e) => handleCountryChange(e.target.value)}>
                            <option value=''>Global</option>
                            {selectNameCountry.map((country, index) => (
                                <option key={index} value={country.country}>{country.country} </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
            {(country) ? barChar : lineChart}
        </div>
    )
}

export default SectionChart;