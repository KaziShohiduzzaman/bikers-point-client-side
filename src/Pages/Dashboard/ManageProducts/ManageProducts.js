import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import swal from 'sweetalert';
import Products from './Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-shore-61104.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])

    //delete or cancel a tour
    const handleDeleteProduct = id => {
        swal({
            title: "Are you sure?",
            text: "Once delete, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("This product has been canceled", {
                        icon: "success",
                    });
                    const url = `https://vast-shore-61104.herokuapp.com/products/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remainingUsers = products.filter(product => product._id !== id);
                                setProducts(remainingUsers);
                            }
                        })

                } else {
                    swal("This product is safe");
                }
            });
    }
    return (
        <div className='container my-4' data-aos="fade-right">
            <div>
                <h1 className='text-center'>Manage All Orders</h1>
                {
                    products.length ?
                        <Row xs={1} md={2} className="g-4 my-3">
                            {
                                products.map(product => <Products key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}></Products>)
                            }
                        </Row>
                        :
                        <h3 className="text-danger text-center">Empty</h3>
                }
            </div>
        </div>
    );
};

export default ManageProducts;