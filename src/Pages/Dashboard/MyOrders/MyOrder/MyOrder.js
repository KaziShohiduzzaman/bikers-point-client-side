import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = (props) => {
    const { _id, bikeName, color, address, status } = props.event;

    return (
        <div>
            <Col>
                <Card className='shadow-lg'>
                    <Card.Body>
                        <Card.Title>Bike Model: {bikeName}</Card.Title>
                        <p>Color : {color}</p>
                        <p>Address : {address}</p>
                        <p>Status: {status}</p>
                        <button onClick={() => props.handleDeleteTour(_id)} className='btn btn-danger d-block mx-auto'>Cancel Order</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyOrder;