import React from 'react';
import { Card, Col } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
const Products = (props) => {
    const { _id, name, img, price } = props.product;
    console.log(props);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Bike: {name}</Card.Title>
                        <p>Price : {price} Lakhs</p>
                        <button onClick={() => props.handleDeleteProduct(_id)} className='btn btn-danger'><DeleteIcon />Delete</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Products;