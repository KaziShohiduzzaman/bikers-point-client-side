import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Products from '../Products/Products';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Our Bike Collection</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <Products key={product._key} product={product}></Products>)
                }
            </Row>
        </div>
    );
};

export default AllProducts;