import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../Images/logo.png'
const Footer = () => {
    return (
        <div className='footer-bg w-100'>
            <Container>
                <Row className='p-5' >
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <p className='footer-font-style'>All locations are open.Please come in at your actual appointment time.According to the latest from NYS and the CDC, masks are mandatory in the building & during exam.If you are a current visitor and have an emergency, admins are available 24/7.
                                Simply call 585-394-2020.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <h2 className='fw-bold'>Contact us</h2>
                            <p> <i class="fas fa-map-marker icon-color me-2"></i> 04360, NewYork, 33 Matehouse str., 12/4</p>
                            <p><i class="fas fa-phone-alt icon-color me-2"></i> 803-33-5644-99</p>
                            <p><i class="fas fa-envelope icon-color me-2"></i> admin @doremischool.net</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='footer-section'>
                            <h2>important Links</h2>
                            <div>
                                <a className='d-block footer-link' href="/"><i class="fab fa-facebook-square icon-color me-2"></i> Connect with Facebook</a>
                                <a className='d-block footer-link' href="/"><i class="fab fa-instagram icon-color me-2"></i> Connect with instagram</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='py-3 text-white text-center footer-set footer-color'>
                <p className='text-white mt-2'>All credit goes to <span className='text-white'>Kazi Shohiduzzaman</span></p>
                <img className='img-fluid img-sized' src={logo2} alt="" />
            </div>

        </div>
    );
};

export default Footer;