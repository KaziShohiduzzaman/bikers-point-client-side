import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const DashboardHome = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} data-aos="fade-right">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img className='container' src="https://www.wallpaperup.com/uploads/wallpapers/2018/02/04/1201770/f4cf92435e39fc9ef58f1f58fbb55d5c-700.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1>About</h1>
                        <p>Bike Wala is the first and largest website about motorcycle in World. We have started our journey since 25th January 1980. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way.</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashboardHome;