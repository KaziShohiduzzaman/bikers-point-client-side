import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, user } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}`}><Button color="inherit">Dashboard Home</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/review`}><Button color="inherit">Review</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>

            <Link style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to='/home'><span className='ms-2'>Home</span></Link>

            <Button onClick={logOut} variant="text" style={{ marginLeft: '20px', padding: '10px , 15px', backgroundColor: 'red', color: 'white' }}>Logout</Button>
            {
                user?.email &&
                <p style={{ textDecoration: 'none', display: 'block', backgroundColor: 'black', color: 'white', margin: '10px', padding: '10px', borderRadius: '5px' }} to='/home'><span className='ms-2'>User : {user?.displayName}</span></p>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: 'green' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashboardHome></DashboardHome>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;