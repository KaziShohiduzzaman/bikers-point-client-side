import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Navigation.css'
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" className='px-5' sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img className='img-fluid logo-size me-3' src={logo} alt="" />
                    Bike Wala</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">
                            <Link to='/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link href="/allCollection">
                            <Link to='/allCollection'>Explore Collection</Link>
                        </Nav.Link>
                        <Nav.Link href="/dashboard">
                            <Link to='/dashboard'>Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <Link to='/login'>Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;