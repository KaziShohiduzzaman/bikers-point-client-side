import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrders from './AllOrders/AllOrders';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [status, orders, setOrders])

    //delete or cancel a tour
    const handleDeleteOrder = id => {
        swal({
            title: "Are you sure?",
            text: "Once canceled, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("This product has been canceled", {
                        icon: "success",
                    });
                    const url = `http://localhost:5000/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remainingUsers = orders.filter(order => order._id !== id);
                                setOrders(remainingUsers);
                            }
                        })

                } else {
                    swal("This product is safe");
                }
            });
    }
    // Update status 
    const handleStatus = id => {
        setStatus(!status);
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Shipped Successfully')
                }
                else {
                    alert('Already Shipped')
                }
            })
    }
    return (
        <div className='container my-4' data-aos="fade-right"
        >
            <div>
                <h1 className='text-center p-4 text-color-services'>Manage All Orders</h1>
                {
                    orders.length ?
                        <Row xs={1} md={2} className="g-4 my-3">
                            {
                                orders.map(order => <AllOrders key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} handleStatus={handleStatus}></AllOrders>)
                            }
                        </Row>
                        :
                        <h3 className="text-danger text-center">Nobody place a single Order</h3>
                }
            </div>
        </div>

    )
};

export default ManageAllOrders;