import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';
import MyOrders from './MyIOrders/MyOrders';
import Reviews from '../Reviews/Reviews';
import Pay from './Pay/Pay';
import MangeAllOrders from './MangeAllOrders/MangeAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import useAuth from './../../hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logout } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    useEffect(() => {
        fetch(`https://immense-peak-90698.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);





    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home"><Button color="inherit">Home</Button></Link><br />     
            <Link to={`${url}/myOrders`}><Button color="inherit">My Order</Button></Link><br />
            <Link to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link><br />
            <Link to={`${url}`}><Button color="inherit">Payment</Button></Link><br />
       

            {isAdmin && <Box>
                <Link to={`${url}/addProducts`}>
                    <Button className="inherit">Add A Products</Button>
                </Link>
                <Link to={`${url}/manageAllOrders`}>
                    <Button color="inherit">Manage All Orders</Button>
                </Link><br />
                <Link to={`${url}/admin`}>
                    <Button color="inherit">Make Admin</Button>
                </Link><br />
                <Link to={`${url}/manageProducts`}>
                    <Button color="inherit">Manage Products</Button>
                </Link><br />
            </Box>


            }

            <Link as={HashLink} to="/home"> <Button onClick={logout}>Logout</Button></Link><br />




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
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
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
                    <Route exact path={path}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <MangeAllOrders></MangeAllOrders>
                    </Route>

                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/admin`}>
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
