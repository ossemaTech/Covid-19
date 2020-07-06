import React from 'react';

import styles from './cover.module.css';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

function SectionCover(props) {
    let pathname = window.location.pathname.replace('/', '');
    let namePage = pathname[0].toUpperCase() + pathname.slice(1);
    
    
    return (
        <div className={styles.cover}>
            <div className={styles.boxTitle} style={{background: `url(${process.env.PUBLIC_URL + '/images/breadcrumb.jpg'}) `}}>
                <Container>
                    <Row>
                        <Col lg='12' className='d-flex'>
                            <div className={styles.contentCover}>
                                <Breadcrumb className={styles.navBreadcrumb}>
                                    <Breadcrumb.Item className={styles.linkHome} href="/covid19">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item className={styles.linkPage} active>{namePage} Corona</Breadcrumb.Item>
                                </Breadcrumb>
                                <h1 className={styles.titleCover}>{namePage} Corona</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SectionCover;