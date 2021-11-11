import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails/ReviewDetails';
import { Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Reviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [setReview])


    return (
        <div className='container' data-aos="fade-up">
            <h1 className='text-center my-5'>People say about Us</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    review.map(detailsReview => <ReviewDetails detailsReview={detailsReview} key={detailsReview._key}></ReviewDetails>)
                }
            </Row>
        </div>
    );
};

export default Reviews;






