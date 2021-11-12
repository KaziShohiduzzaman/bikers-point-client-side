import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
// import login from '../../../images/login.png';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUSer, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUSer(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img className='img-none' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png' style={{ width: '100%', marginTop: '80px' }} alt="" />
                </Grid>
                <Grid item sx={{ mt: 0 }} xs={12} md={6}>
                    <div style={{ marginLeft: '60px' }}>
                        <Typography variant="h1" component="div" gutterBottom>
                            Login
                        </Typography>
                        {
                            isLoading && <Spinner className='spinner-style' animation="border" />
                        }
                        {user?.email && <Alert severity="success">Successfully Login</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                        <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name='email'
                                onChange={handleOnChange}
                                variant="filled" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                name='password'
                                onChange={handleOnChange}
                                variant="filled"
                                type="password" />

                            <Button
                                sx={{ width: '75%', m: 1, backgroundColor: 'green' }}
                                variant="contained"
                                color="primary"
                                type="submit">
                                Login
                            </Button>
                            <Link style={{ textDecoration: 'none' }} to='/register'>
                                <Button className='text-success' variant="text">New User? Please Register</Button>
                            </Link>
                        </form>
                        <button onClick={handleGoogleSignIn} className='btn btn-success w-75 ms-2' style={{}}><i className="fab fa-google me-1"></i>Sign In</button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;