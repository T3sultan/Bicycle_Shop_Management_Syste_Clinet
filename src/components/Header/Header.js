import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import Box from '@mui/material/Box';
import logo from '../../images/logo/cycle.png'
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (

        <>
            <Navbar className="mineContainer" collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="container">

                    <Navbar.Brand href="#home" style={{ color: '#11CFE5' }} className="hospitalTittle"> Bicycle Sales</Navbar.Brand>



                    <Nav className="">
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home#products">Products</Nav.Link>
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home#brands">Brands</Nav.Link>
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                            {
                                user?.email ?
                                    <Box className="logoContainer">
                                       
                                    <Nav.Link style={{ color: '#11CFE5' }} as={Link} to="/dashboard">Dashboard</Nav.Link>


                                        <Button className="logout" onClick={logout}>Logout</Button>

                                    </Box>


                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            }
                            {
                                user?.email &&

                                <span style={{ color: "white" }}> {user?.displayName} </span>


                            }



                        </Navbar.Collapse>

                    </Nav>
                </Container>
            </Navbar>

        </>




    );
};

export default Header;