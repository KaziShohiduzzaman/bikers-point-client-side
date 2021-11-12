import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo.png'
import './Navigation.css'
const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar bg="light" expand="lg" className='container-navbar shadow-lg' sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img className='img-fluid logo-size me-1' src={logo} alt="" />
                    <span className='fw-bold'>Bikers Point</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button variant="text">Home</Button></Link>

                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/allCollection"><Button variant="text">Explore Collection</Button></Link>

                        {
                            user?.email ?
                                <Box>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button variant="text">Dashboard</Button></Link>

                                    <Button onClick={logOut} variant="outlined" color="error">Logout</Button>

                                    <Button className='res-btn' style={{ marginLeft: '10px' }} variant="outlined" color="success">
                                        {user?.displayName}
                                    </Button>
                                </Box>

                                :
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button variant="text">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;