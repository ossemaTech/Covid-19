import React from 'react';
import {Button, Accordion, Card } from 'react-bootstrap';

import styles from './faq.module.css';

function SectionFaq(props) {

    return (
        <div className={styles.sectionContact}>
            <div className={styles.headerFaq}>
                <span className={styles.spanFaq}>Faq"s</span>
                <h2 className={styles.titleFaq}>Frequently Ask Questions</h2>
            </div>
            <Accordion defaultActiveKey="0" className={styles.accordion}>
                {props.faq.map(faq => (
                <Card key={faq.id} className={styles.card}>
                    <Card.Header className={styles.header}>
                    <i className='fa fa-question-circle-o'></i>
                    <Accordion.Toggle className={styles.toggle} as={Button} variant="link" eventKey={faq.id}>
                        {faq.question}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={faq.id}>
                    <Card.Body className={styles.bodyCard}>{faq.reponse} </Card.Body>
                    </Accordion.Collapse>
                </Card>
                ))}
            </Accordion>
        </div>
    )
}

export default SectionFaq;