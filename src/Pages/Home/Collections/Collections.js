import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Collection from '../Collection/Collection';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Collections = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container ' data-aos="fade-up">
            <h1 className='text-center my-5'>Our Bike Collection</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <Collection key={product._key} product={product}></Collection>)
                }
            </Row>
        </div>
    );
};

export default Collections;