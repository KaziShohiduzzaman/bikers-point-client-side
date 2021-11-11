import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AllOrders.css'
// import swal from 'sweetalert';
const AllOrders = (props) => {
    const { _id, address, phone, color, userName, userEmail, bikeName, status } = props.order;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Bike: {bikeName}</Card.Title>
                        <p>Purchase By: {userName}</p>
                        <p>Email : {userEmail}</p>
                        <p>Colour : {color}</p>
                        <p>Address : {address}</p>
                        <div>
                            <p className='d-inline'>Status: {status}</p> <input className='d-inline ms-1 btn btn-warning' onClick={() => props.handleStatus(_id)} type="submit" value="Click to Shipped" />
                        </div>
                        <p>Phone Number: {phone}</p>
                        <button onClick={() => props.handleDeleteOrder(_id)} className='btn btn-danger d-flex mx-auto'>Cancel Order</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrders;