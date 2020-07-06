import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import Faq from '../faq';
import FormContact from '../formContact';

import styles from './contact.module.css';

function SectionContact(props) {

    return (
        <div className={styles.sectionContact}>
          <Container>
            <Row>
              <Col lg='6' md='12'>
                <FormContact />
              </Col>
              <Col lg='6' md='12'>
                <Faq faq={props.faq} />
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default SectionContact;