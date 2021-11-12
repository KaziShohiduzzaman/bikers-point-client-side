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
                        <img className='container img-fluid' src="https://yt3.ggpht.com/ytc/AKedOLTKsyciylM3WGb8GxE23vyvEyp0wsO84rPmS02hWg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1 className='text-success text-center'>ABOUT US</h1>
                        <p>Bikers point is the first and largest website about motorcycle in World. We have started our journey since 25th January 1980. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way.
                            <br />
                            We specialize in the motorcycle trade, all motorcycle parts, and accessories, as well as maintenance and repair of all types of motorcycles. <br />
                            We have a highly skilled and dedicated team at work, our innovative methods, and a strict standard for completing the requirements of our customers, in addition to our commitment to honesty and trustworthiness with our customers.
                        </p>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} data-aos="fade-right">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <h1 className='text-success text-center'>OUR MISSION</h1>
                        <p>1. The Bikers Point is keen to satisfy its customers. is keen to satisfy its customers. <br /><br />
                            2. The Bikers Point is committed to providing a high level of services and products in accordance with quality standards.<br /><br />
                            3. The Bikers Point, firmly believes that the company's development process is linked to its human resources.<br /><br />
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img className='container img-fluid w-75' src="https://www.thebikers-point.com/gallery_gen/dcb8489c2bd77e9dc6e33aa4d4dd7456_408x396.66666666667.png" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashboardHome;