import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Box style={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div" gutterBottom>
                    Register
                </Typography>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        type='text'
                        name='name'
                        onChange={handleOnChange}
                        variant="outlined" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Email"
                        type='email'
                        name='email'
                        onChange={handleOnChange}
                        variant="outlined" />

                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Password"
                        name='password'
                        onChange={handleOnChange}
                        variant="outlined"
                        type="password" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Retype Password"
                        name='password2'
                        onChange={handleOnChange}
                        variant="outlined"
                        type="password" />

                    <Button
                        sx={{ width: '50%', m: 1, backgroundColor: 'green' }}
                        variant="contained"
                        color="primary"
                        type="submit">
                        Register
                    </Button>
                    <Link style={{ textDecoration: 'none', display: 'block' }} to='/login'>
                        <Button variant="text" color='success'>Already Registered? Please Login</Button>
                    </Link>
                </form>}
                {
                    isLoading && <CircularProgress />
                }
                {user?.email && <Alert severity="success">Successfully added a user</Alert>
                }
                {authError && <Alert severity="error">{authError}</Alert>
                }
            </Box>
        </Container>
    );


};

export default Register;