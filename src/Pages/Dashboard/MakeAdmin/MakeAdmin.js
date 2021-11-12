import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://vast-shore-61104.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal({
                        title: "Admin Create Success!",
                        text: "Now this person is admin",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();

                }
            })
        e.preventDefault()
    }
    return (
        <div data-aos="flip-left">
            <h1 className='text-center text-decoration-underline mb-5'>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <div style={{ width: '50%', margin: 'auto' }}>

                    <TextField
                        label="Email"
                        onBlur={handleOnBlur}
                        type="email"
                        variant="outlined" />

                    <Button style={{ marginTop: '10px', marginLeft: '40px', backgroundColor: '#00403a ' }} type='submit' variant='contained'>Make Admin</Button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;