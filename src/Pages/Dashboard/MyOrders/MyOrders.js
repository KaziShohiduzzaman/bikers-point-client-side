import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [matchProducts, setMatchProducts] = useState([]);

    useEffect(() => {
        <Spinner animation="border" />;
        fetch('https://vast-shore-61104.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products, user?.email, setMatchProducts])
    useEffect(() => {
        setMatchProducts(products.filter(event => event.userEmail === user?.email))
    }, [products, user?.email, setMatchProducts])

    //Delete tour
    const handleDeleteTour = id => {
        swal({
            title: "Are you sure?",
            text: "Once Cancel, you will not be able to take this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Successfully Cancel Your order", {
                        icon: "success",
                    });
                    const url = `https://vast-shore-61104.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remainingUser = products.filter(orders => orders._id !== id);
                                setProducts(remainingUser);
                            }
                        })
                } else {
                    swal("Your orders are safe.");
                }
            });
    }
    return (
        <div className="container" data-aos="fade-right">
            <div>
                <h1 className="text-center p-4">My Order</h1>
                {matchProducts.length ?
                    <Row xs={1} md={3} lg={3} className='gy-4 my-4'>
                        {matchProducts.map(event => <MyOrder key={event._key} event={event} handleDeleteTour={handleDeleteTour}></MyOrder>)}
                    </Row>
                    :
                    <h3 className="text-danger text-center">Opps!! You have not
                        <br />
                        order any Item. </h3>
                }
            </div>
        </div>
    );
};

export default MyOrders;