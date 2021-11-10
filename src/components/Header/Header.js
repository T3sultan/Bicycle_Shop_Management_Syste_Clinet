import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import Box from '@mui/material/Box';
import logo from '../../images/logo/cycle.png'


const Header = () => {
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
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home#exclusive">ExclusiveFeatures</Nav.Link>
                            <Nav.Link style={{ color: '#11CFE5' }} as={HashLink} to="/home#reviews">Reviews</Nav.Link>


                            {/* {
                                user?.email ? */}

                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <li style={{ color: '#11CFE5' }} className='logout'>Dashboard</li>
                            </Link>


                            <Button className='logout'>Logout</Button>


                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button className='logout'>Login</Button>
                            </NavLink>
                            {/* } */}



                        </Navbar.Collapse>

                    </Nav>
                </Container>
            </Navbar>

        </>




    );
};

export default Header;