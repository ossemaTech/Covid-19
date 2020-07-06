import React from 'react';
import {Container, Row, Col, Media } from 'react-bootstrap';

//Import All Components Section Page Treatment
import Cover from '../../Components/cover';
import SectionCases from '../../Components/SectionCasesAllPage';
import FormContact from '../../Components/formContact'

import styles from './ContactPage.module.css';

function Contact(props) {
    return (
        <React.Fragment>
            <Cover />
            <div className={styles.Contact}>
                <div className={styles.headingContactus}>
                    <span className={styles.spanTitle}>Get In Touch</span>
                    <h2 className={styles.titleContactUs}>We’re Here to Help You Contact Us</h2>
                </div>
                <div className={styles.infoContactUs}>
                    <Container>
                        <Row className={styles.rowContact}>
                            <Col lg='4' md='6' sm='12' className={styles.infoColumn}>
                                <div className={styles.bexInfoContact}>
                                <Media>
                                    <img
                                        width={50}
                                        height={50}
                                        className="mr-3"
                                        src={process.env.PUBLIC_URL + "/images/contact/location.svg"}
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <h4 className={styles.nameService}>Location</h4>
                                        <p className={styles.descService}>
                                        Visit to explore the world
                                        </p>
                                    </Media.Body>
                                    </Media>
                                    <p className={styles.infoService}>124, Queens walk 2nd cross <br/> newyork 5241.</p>
                                </div>
                            </Col>
                            <Col lg='4' md='6' sm='12' className={styles.infoColumn}>
                                <div className={styles.bexInfoContact}>
                                    <Media>
                                        <img
                                            width={50}
                                            height={50}
                                            className="mr-3"
                                            src={process.env.PUBLIC_URL + "/images/contact/phone.svg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <h4 className={styles.nameService}>Make a Call</h4>
                                            <p className={styles.descService}>
                                            Let’s talk with our experts 
                                            </p>
                                        </Media.Body>
                                    </Media>
                                    <p className={styles.infoService}>+216 5244 6832
                                    <br/>Mon - Fri: 09.00 to 18.00</p>
                                </div>
                            </Col>
                            <Col lg='4' md='12' sm='12' className={styles.infoColumn}>
                                <div className={styles.bexInfoContact}>
                                    <Media>
                                        <img
                                            width={50}
                                            height={50}
                                            className="mr-3"
                                            src={process.env.PUBLIC_URL + "/images/contact/mail.svg"}
                                            alt="email_about_covid19"
                                        />
                                        <Media.Body>
                                            <h4 className={styles.nameService}>Send a Mail</h4>
                                            <p className={styles.descService}>
                                            Dont’s hesitate to mail 
                                            </p>
                                        </Media.Body>
                                    </Media> 
                                    <p className={styles.infoService}>jlididev20@gmail.com
                                    <br/>info@example.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col lg='6' md='12'>
                            <FormContact />
                        </Col>
                        <Col lg='6' md='12'>
                            <div className={styles.imgContact}>
                                <img className={styles.Img} src={process.env.PUBLIC_URL + '/images/contactUs.png'} alt='contact_about_covid19' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <SectionCases data = {props.data} />
        </React.Fragment>
    )
}

export default Contact;