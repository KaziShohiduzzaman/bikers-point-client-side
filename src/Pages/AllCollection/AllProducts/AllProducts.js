import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Products from '../Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://vast-shore-61104.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            {
                products?.length ?
                    <div>
                        <h1 className='text-center my-5'>Our Bike Collection</h1>
                        <Row xs={1} md={3} className="g-4" data-aos="fade-down-left">
                            {
                                products.map(product => <Products key={product._key} product={product}></Products>)
                            }
                        </Row>
                    </div>
                    :
                    <Spinner className='d-block mx-auto my-5' animation="border" />

            }

        </div>
    );
};

export default AllProducts;