import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './ReviewDetails.css'
const ReviewDetails = ({ detailsReview }) => {
    const { comment, name, reviewImage, responseRate } = detailsReview;
    return (
        <Col>
            <Card className='review-card shadow-lg h-100'>
                {
                    reviewImage ?
                        <Card.Img variant="top" src={reviewImage} className='img-fluid img-size-review d-block mx-auto' />
                        :
                        <Card.Img variant="top" src='https://www.pngkey.com/png/detail/22-223848_businessman-vector-person-logo-png.png' className="img-fluid img-size-review d-block mx-auto" />
                }
                <Card.Body>
                    <Card.Title className='text-center text-decoration-underline'>{name}</Card.Title>
                    <Card.Text>
                        "{comment}"
                    </Card.Text>
                    <Card.Text className='text-center'>
                        <Rating
                            initialRating={responseRate}
                            readonly
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        ({responseRate})/5
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReviewDetails;