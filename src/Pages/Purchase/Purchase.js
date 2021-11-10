import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purchase.css'
import swal from 'sweetalert';
import Footer from '../../Shared/Footer/Footer';


const Purchase = () => {
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const { Id } = useParams();
    const refUserName = useRef('')
    const refEmail = useRef('')
    const [purchase, setPurchase] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/products/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [Id])

    const handleAddressChange = e => {
        const updateAddress = e.target.value;
        const updateEvent = { ...purchase };
        updateEvent.address = updateAddress;
        setPurchase(updateEvent)
    }
    const handlePhoneNumberChange = e => {
        const updatePhone = e.target.value;
        const updateEvent = { ...purchase };
        updateEvent.phone = updatePhone;
        setPurchase(updateEvent)
    }
    const handleColorChange = e => {
        const updateColor = e.target.value;
        const updateEvent = { ...purchase };
        updateEvent.color = updateColor;
        setPurchase(updateEvent)
    }

    const handleSubmit = e => {
        purchase.userName = refUserName.current.value;
        purchase.userEmail = refEmail.current.value;
        purchase.bikeName = event?.name;
        purchase.status = 'pending';


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Order Placed",
                        text: "Successfully you added your order",
                        icon: "success",
                        button: "Aww yes!",
                    });
                    // setEvent({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>

                <h1 className='text-center p-4'>{event.name}</h1>
                <img className='img-fluid d-block mx-auto my-5' src={event.img} alt="" />
                <p className='header-text-booking'><span>About {event.name}:</span> {event.description}</p>
                <h1>Price : {event.price} Lakhs</h1>

                <Container>
                    <div className='mb-5'>
                        <h3 className='text-center p-4 text-color-services'>Registration</h3>
                        <form onSubmit={handleSubmit}>
                            <input className='input-place' ref={refUserName} type="text" placeholder="Name" value={user.displayName || ''} />

                            <input className='input-place' ref={refEmail} type="email" placeholder='Email' value={user.email || ''} />

                            <input className='input-place' onChange={handleAddressChange} type="text" placeholder='Address' />

                            <input className='input-place' onChange={handlePhoneNumberChange} type="number" placeholder='Phone Number' />

                            <input className='input-place' onChange={handleColorChange} type="text" placeholder='Colour' />

                            <input className='input-place btn-submit' type="submit" value="Register" />
                        </form>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;