import React from 'react';
import {Container, Row, Col, Image, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

import styles from './footer.module.css';

function SectionFooter(props) {    
    return (
        <div className={styles.footer}>
            <svg width="100%" height="160" fill="none">
                <path
                    fill="#50658e"
                    d="
                        M0,80
                        C204,235
                        290,25 
                        1350,130

                        V 359 
                        H 0 
                        V 67 
                        Z"> 
                </path>
            </svg> 
        <div className={styles.footer2}> 
            <Container>
                <Row>
                    <Col lg='3' md='12' sm="12">
                        <Image src={props.setting.logo} alt='Covid_19' width='200px' height='60px' />
                        <p className={styles.descrip}> {props.setting.descrip} </p>
                        <ul className={styles.list}>
                            <li className={styles.iconSocial}>
                                <a href={props.setting.facebook}>
                                    <i className={props.setting.iconFb} ></i>
                                </a>
                            </li>
                            <li className={styles.iconSocial}>
                                <a href={props.setting.twitter}>
                                    <i className={props.setting.iconTwit} ></i>
                                </a>
                            </li>
                            <li className={styles.iconSocial}>
                                <a href={props.setting.linkdin}>
                                    <i className={props.setting.iconLinkd} ></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h3 className={styles.titleFooter}>Usefull links</h3>
                        <ul className={styles.list}>
                            {props.websiteInfo.map(info => (
                                <li className={styles.linkImp} key={info.id} >
                                    <a href={info.linkSite} target="_blank" > {info.nameSite} </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h3 className={styles.titleFooter}>Contact Us</h3>
                        <ul className={styles.list}>
                            <li className={styles.listContact}>
                                <i className='fa fa-map-marker'></i>
                                {props.setting.map}
                            </li>
                            <li className={styles.listContact}>
                                <i className='fa fa-volume-control-phone'></i>
                                {props.setting.phone}
                            </li>
                            <li className={styles.listContact}>
                                <i className='fa fa-clock-o'></i>
                                {props.setting.timeWork}
                            </li>
                            <li className={styles.listContact}>
                                <i className='fa fa-envelope-open-o'></i>
                                {props.setting.mail}
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' md='4' sm="12">
                        <h3 className={styles.titleFooter}>Newsletter</h3>
                        <p className={styles.descNewsletter}>Subscribe Us & Recive Our Offers and Updates i Your Inbox Directly.</p>
                        <Form className={styles.form}>
                            <InputGroup className="mb-2">
                                <FormControl className={styles.inputControl} id="inlineFormInputGroup" placeholder="Email Address..." />
                                <InputGroup.Prepend>
                                    <InputGroup.Text className={styles.inputBtn}>
                                        <Button className={styles.btnNewsLetter}>
                                            <i className='fa fa-paper-plane-o'></i>
                                        </Button>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.barFooter}>
                            <p>Copyright © 2020 Covid-19. All Right <span>By Osama.</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default SectionFooter;