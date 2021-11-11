import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {
    return (
        <Container data-aos="zoom-in">
            <Row className='bg-dark'>
                <Col xs={12} md={6} className='text-white'>
                    <h1 className='header-text'>We are <br /> professional <br /> Seller<br />Since 1980</h1>
                    <p className='header-sm-text'>If you want free delivery that are fun and exciting, you’ve come to the right place. You buy latest super bikes.</p>
                    <Link to="/allCollection"><Button className='btn-header' variant="warning" size="lg">
                        Explore Collection
                    </Button>{' '}</Link>
                </Col>
                <Col xs={6} md={6} className='header-img'>
                    <img className='img-fluid' src='https://i.ibb.co/RYyyz6s/kundan-bana-By-RI1p-S12-Eo-unsplash.jpg' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;