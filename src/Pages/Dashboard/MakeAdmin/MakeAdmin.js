import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
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
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    onBlur={handleOnBlur}
                    type="email"
                    variant="outlined" />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;