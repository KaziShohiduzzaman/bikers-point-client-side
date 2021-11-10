import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Collection.css'
const Collection = ({ product }) => {
    const { _id, name, description, price, img } = product
    return (
        <Col>
            <Card className='hover-card'>
                <Card.Img variant="top" src={img} className='img-fluid img-size' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 300)}
                    </Card.Text>
                    <Card.Title>Price: {price} Lakhs</Card.Title>
                    <Link className='text-decoration-none' to={`/purchase/${_id}`}>
                        <button>Purchase</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Collection;