import React from 'react';
import cx from 'classnames';
import {Navbar, Nav, NavItem, Image, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styles from './navbar.module.css';


function SectionNavbar(props) {      
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className={styles.brand}>
                        <Image src={process.env.PUBLIC_URL + props.logo} alt='Covid_19' width='200px' height='60px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={cx(styles.navitem, "ml-auto")}>
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/about">
                                <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/symptons">
                                <Nav.Link as={Link} to="/symptons" >Symptons</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={4} href="/treatment">
                                <Nav.Link as={Link} to="/treatment" >Treatment</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={5} href="/statistic">
                                <Nav.Link as={Link} to="/statistic" >Statistic</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={6} href="/contact">
                                <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default SectionNavbar;