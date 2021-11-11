import React from 'react';
import './Team.css'
import { Card, CardGroup } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Team = () => {
    return (
        <div className='my-5' data-aos="fade-up">
            <h1 className='text-center m-3 card-h1'>Meet Our Team</h1>
            {/* team card  */}
            <CardGroup className='team-container'>
                <Card className='m-1 shadow-lg img-hover'>
                    <Card.Img className='team-img rounded-circle' variant="top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    <Card.Body>
                        <Card.Title>Courtney ley</Card.Title>
                        <Card.Text>
                            Manager
                        </Card.Text>
                        <button className='btn btn-warning'>Details</button>
                    </Card.Body>

                </Card>
                <Card className='m-1 shadow-lg img-hover'>
                    <Card.Img className='team-img rounded-circle' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwgLLn2wGWIvpaXyaIuQtzWAESx3NsdKeFu35MKkMuIfSJCpR5_Vj4IsHmdQzX7RjDII&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Michael Philipse</Card.Title>
                        <Card.Text>
                            Social Media Manager
                        </Card.Text>
                        <button className='btn btn-warning'>Details</button>
                    </Card.Body>

                </Card>
                <Card className='m-1 shadow-lg img-hover'>
                    <Card.Img className='team-img rounded-circle' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3G28rfZprt6b6ahrI970s-jmI9utU5JaiQ&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Francis Habbant</Card.Title>
                        <Card.Text>
                            Managing Director
                        </Card.Text>
                        <button className='btn btn-warning'>Details</button>
                    </Card.Body>

                </Card>
                <Card className='m-1 shadow-lg img-hover'>
                    <Card.Img className='team-img rounded-circle' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRCNYUE9rn2m902SpR06fKMgxK3Ep6CzeJQ&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Marta Ferrari</Card.Title>
                        <Card.Text>
                            Investor
                        </Card.Text>
                        <button className='btn btn-warning'>Details</button>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div >
    );
};

export default Team;